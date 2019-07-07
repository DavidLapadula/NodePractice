const request = require('supertest');
const jwt = require('jsonwebtoken'); 
const mongoose = require('mongooose'); 
const app = require('../src/app');
const User = require('../src/models/user');

const userOneId =  new mongoose.Types.ObjectId(); 
const userOne = {
    name: 'David', 
    email: 'david@email.com', 
    password: '!@!@!@David', 
    tokens: [{
        token: jwt.sign({ _id : userOneId}, process.env.JWT_SECRET)
    }]
}; 

beforeEach(async () => {
    await User.deleteMany();
    await new User(userOne).save(); 
});

test('Should sign up new user', async () => {
    await request(app).post('./users').send({
        name: 'David',
        email: 'david@mail.com',
        password: 'mypass123'
    }).expect(201)
}); 

test('Should log in existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email, 
        password: userOne.password
    }).expect(200); 
});


test('Should fail login', async () => {
    await request(app).post('/users/login').send({
        email: 'steve@email.com', 
        password:'steve'
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
}); 

test('Should not delete account, unauthenticated', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401); 
}); 