require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndDelete('5d084521629add0dcca61746')
    .then((user) => {
        return Task.countDocuments({ completed: false });
    })
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    });

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed: false });
    return count;
};

deleteTaskAndCount('5d084521629add0dcca61746')
    .then((count) => {
        console.log(count);
    })
    .catch((e) => {
        console.log(e);

    })