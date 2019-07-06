const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/user');

const userOne = {
    name: 'David', 
    email: 'david@email.com', 
    password: '!@!@!@David'
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