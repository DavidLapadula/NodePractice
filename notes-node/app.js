console.log('Starting app.js') //comfortable with how files start to run

const fs = require('fs');  //fetch all contents and methods of fs module 
const os = require('os');  //fetch all contents and methods of fs module 
const notes = require('./notes.js');  //fetch all contents and methods of fs module 

// let user = os.userInfo(); 

// fs.appendFile('greetings.txt', `${user.username} You are ${notes.age}`, (err) => {
//     if (err) { 
//         console.log(err); 
//     }
// });  

let res = notes.addNotes(); 
console.log('Result', notes.add(1, 2)); 




