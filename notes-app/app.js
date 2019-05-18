// Core modules
const yargs = require('yargs');
const chalk = require('chalk');
const validator = require('validator');
const fs = require('fs');
// My own packages
const notes = require('./notes');


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
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
});

// create the read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler() {
        console.log('reading a note');
    }
});

// list all notes
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler() {
        notes.listNotes();
    }
});

// look for one one note and read it if exists
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    }, 
    handler(argv) {
        notes.readNote(argv.title);
    }
});

// check the commands available
yargs.parse(); 