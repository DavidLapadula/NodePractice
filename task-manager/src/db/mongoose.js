const mongoose = require('mongoose');
const validator = require('validator'); 

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

// Make New user model

const User = mongoose.model('User', {
    name: {
        type: String, 
        required: true, 
        trim: true
    },
    password:  {
        type: String, 
        required: true, 
        trim: true, 
        minlength: 6, 
        validate(value) {
            if(value.toLowerCase().includes('Password')) {
                throw new Error('That is not a safe password')
            }
        }
    },  
    age: {
        type: Number, 
        validate(value) {
            if (value < 0) {
                throw new Error('Age mnust be a positive number')
            }; 
        }, 
        default: 0
    }, 
    email: {
        type: String, 
        required: true, 
        trim: true, 
        lowercase: true, 
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error ('That is not a valid email'); 
            }; 
        }
    }, 
}); 

// Make a new user and dave it
// const me = new User({
//     name: 'John',
//     password: 'uwishtooshort', 
//     age: 26, 
//     email: 'john123@hotmail.com'
// });

// me.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log('Error', err);
//     });


// New Task and save it

const Task = mongoose.model('Tasks', {
    description: {
        type: String, 
        required: true, 
        trim: true
    }, 
    completed: {
        type: Boolean, 
        required: false, 
        default: false
    }
}); 

const task = new Task({
    description: 'Study', 
    completed: false
})

task.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('Error', err);
    });