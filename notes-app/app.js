// Core modules
const yargs = require('yargs'); 
const chalk = require('chalk'); 
const validator = require('validator');
// My own packages
const getNotes = require('./notes'); 


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


// command line instances with raw node
const command = process.argv[2];


// create the add command
yargs.command({
    command: 'add', 
    describe: 'Add a new note', 
    builder: {
        title: {
            describe: 'Note Title', 
            demandOption: true, 
            type: 'string'
        }, 
        body: {
            describe: 'Note Body', 
            demandOption: true, 
            type: 'string'
        }

    },
    handler: function (argv) {
        console.log('Title: ' + argv.title); 
        console.log('Body: ' + argv.body); 
    }
}); 

// create remove command
yargs.command({
    command: 'remove', 
    describe: 'Remove a new note', 
    handler: function () {
        console.log('removing note'); 
    }
}); 

// create list command
yargs.command({
    command: 'list', 
    describe: 'List all notes', 
    handler: function () {
        console.log('listing all notes'); 
    }
}); 

// create the read command
yargs.command({
    command: 'read', 
    describe: 'Read a note', 
    handler: function () {
        console.log('reading a note'); 
    }
}); 

// check the commands available
yargs.parse(); 