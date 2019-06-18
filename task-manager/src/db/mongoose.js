const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
});

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// });

// const me = new User({
//     name: 'David',
//     age: 26
// });

// me.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log('Error', err);
//     });


const Task = mongoose.model('Tasks', {
    description: {
        type: String
    }, 
    completed: {
        type: Boolean
    }
}); 

const task = new Task({
    description: 'Learn', 
    completed: false
})

task.save()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log('Error', err);
    });