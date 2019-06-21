require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5d0adb11ac1cc1379c8b5b3e', { age: 1 })
    .then((user) => {
        return User.countDocuments({ age: 1}); 
    })
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    }); 