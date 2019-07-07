require('../src/db/mongoose');
const User = require('../src/models/user');

User.findByIdAndUpdate('5d0adb11ac1cc1379c8b5b3e', { age: 1 })
    .then((user) => {
        return User.countDocuments({ age: 1 });
    })
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    });


const updateAgeAndCount = async (id, age) => {
    await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
};

updateAgeAndCount('5d0adb11ac1cc1379c8b5b3e', 2)
    .then((count) => {
        console.log(count);
    })
    .catch((e) => {
        console.log(e);

    })