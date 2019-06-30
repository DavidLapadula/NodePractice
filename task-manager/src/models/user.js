const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value) {
            if (value.toLowerCase().includes('Password')) {
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
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('That is not a valid email');
            };
        }
    },
    token: [{
        token: {
            type: String,
            required: true
        }
    }]
});

userSchema.statics.findByCredentials = async (email, password) => {
    const user = User.findOne({ email });

    if (!user) throw new Error('Unable to log in');

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error('Unable to login');

    return user;
};

userSchema.methods.toJSON = async function () {
    const user = this;
    const userObject = user.toObject(); 

    delete userObject.password; 
    delete userObject.tokens; 

    return userObject; 
}; 

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse');
    userSchema.tokens = user.tokens.concat({ token }); 
    user.save(); 
    return token;
}

//password hash
userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('pasword')) {
        user.password = await bcrypt.hash(user.password, 8);
    };

});

const User = mongoose.model('User', userSchema);

module.exports = User; 