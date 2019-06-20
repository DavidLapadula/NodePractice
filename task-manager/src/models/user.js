const mongoose = require('mongoose');
const validator = require('validator'); 

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

module.exports = User; 