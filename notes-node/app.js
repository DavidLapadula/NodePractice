console.log('Starting app.js') //comfortable with how files start to run

const fs = require('fs');  //fetch all contents and methods of fs module 
const os = require('os');  //information from the OS of the machine
const _ = require('lodash');  //fetch all contents and methods of fs module 
const yargs = require('yargs');  //fetch all contents and methods of fs module 

const notes = require('./notes.js'); 

// let user = os.userInfo(); // access = to the file system

// fs.appendFile('greetings.txt', `${user.username} You are ${notes.age}`, (err) => {
//     if (err) { 
//         console.log(err); 
//     }
// });  


// console.log(_.isString('David')); // returns true if it is a string
// let filterArray = _.uniq(['Mike', 1, 'Mike', 1, 2, 3 ,4]); // _. to remove duplicates from an array 

const argv = yargs.argv; 

let command = argv._[0];

// console.log('Process', process.argv); 
console.log('Yargs', argv); 

if (command === 'add') {
    notes.addNote(argv.title, argv.body); 
} else if (command === 'list') {
    notes.getAll(); 
} else if (command === 'remove') {
    notes.removeNote(argv.title); 
} else if (command === 'read') {
    notes.getNote(argv.title); 
} else { 
    console.log('Command not recognized')
}  
 