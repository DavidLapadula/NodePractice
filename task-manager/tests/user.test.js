const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../src/app');
const { userOne, userOneId, setupDatabase } = require('./fixtures/db');

beforeEach(setupDatabase);

test('Should sign up new user', async () => {
    const response = await request(app).post('./users').send({
        name: 'David',
        email: 'david@mail.com',
        password: 'mypass123'
    }).expect(201);

    // Assert db has been changed correctly
    const user = await User.findById(response.body.user_id);
    expect(user)
        .not.toBeNull();

    // Assertion about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'David',
            email: 'david@mail.com'
        },
        token: user.tokens[0].token
    });

    expect(user.password).not.toBe('mypass123');
});

test('Should log in existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200);

    const user = await User.findById(response.body.user_id);

    expect(response.body.token).toBe(user.tokens[1].token);
});


test('Should fail login', async () => {
    await request(app).post('/users/login').send({
        email: 'steve@email.com',
        password: 'steve'
    }).expect(400);
});

test('Get user profile', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);
});

test('Should not get profile, unathenticated', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401);
});

test('Should delete account', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200);

    const user = await User.findById(userOneId);

    expect(user).toBeNull();
});

test('Should not delete account, unauthenticated', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401);
});

test('Should upload avatar', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/download.jpg')
        .expect(200);

    const user = User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer));
});

test('Should update valid user fields', async () => {
    await request(app)
        .post('/users/me/')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'John'
        })
        .expect(200);

    const user = User.findById(userOneId);
    expect(user.name).toEqual('John');
});

test('Should not update invalid user fields', async () => {
    await request(app)
        .post('/users/me/')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Toronto'
        })
        .expect(400);
}); 