const jwt = require('jsonwebtoken');
const mongoose = require('mongooose');
const User = require('../../src/models/user'); 
const Task = require('../../src/models/task'); 

const userOneId = new mongoose.Types.ObjectId();
const userOne = {
    name: 'David',
    email: 'david@email.com',
    password: '!@!@!@David',
    tokens: [{
        token: jwt.sign({ _id: userOneId }, process.env.JWT_SECRET)
    }]
};

const userTwoId = new mongoose.Types.ObjectId();
const userTwo = {
    name: 'John',
    email: 'john@email.com',
    password: '!@!@!@john',
    tokens: [{
        token: jwt.sign({ _id: userTwoId }, process.env.JWT_SECRET)
    }]
};

const taskOne = {
    _id: new mongoose.Types.ObjectId(), 
    description: 'First Task', 
    completed: false,
    owner: userOneId._id
}; 

const taskTwo = {
    _id: new mongoose.Types.ObjectId(), 
    description: 'Second Task', 
    completed: true,
    owner: userTwoId._id
}; 

const setupDatabase = async () => {
    await User.deleteMany();
    await Task.deleteMany(); 
    await new User(userOne).save();
    await new User(userTwo).save();
    await new Task(taskOne).save();
    await new Task(taskTwo).save();
}; 

module.exports = {
    userOneId, 
    userOne,
    userTwo, 
    userTwoId, 
    taskOne, 
    taskTwo, 
    setupDatabase
}
