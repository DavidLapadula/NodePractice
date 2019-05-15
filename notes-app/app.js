const getNotes = require('./notes'); 
const validator = require('validator');
const chalk = require('chalk'); 


// console.log(validator.isEmail('example.com')); 
//console.log(validator.isURL('example.com')); 

// Print color to the console using chalk
const greenMssg = chalk
                    .green
                    .bold
                    .inverse
                    ('Success'); 

const redMssg = chalk
                .red
                .bold
                .inverse
                ('Fail'); 

const command = process.argv[2];

if (command === 'add') {
    console.log('here');
} else if (command === 'remove') {
    console.log('there'); 
}; 