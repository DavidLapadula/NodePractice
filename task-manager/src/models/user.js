const mongoose = require('mongoose');
const validator = require('validator'); 
const bcrypt = require('bcrypt'); 

const userSchema = new mongoose.Schema({
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

userSchema.pre('save', function(next) {
    const user = this; 

    if (user.isModified('pasword')) {
        user.password =  bcrypt.hash(user.password, 8); 
    }; 

}); 

const User = mongoose.model('User', userSchema); 

module.exports = User; 