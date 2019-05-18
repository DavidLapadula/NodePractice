const fs = require('fs'); 
const chalk = require('chalk'); 

const getNotes = (title) => {

}; 

const readNote = (title) => {
    const notes = loadNotes(); 

    const note = notes.find((note) => note.title === title); 

    if (note)  {
        console.log(chalk.inverse(note.title)); 
        console.log(note.body); 
    } else {
        console.log(chalk.inverse.red(title + ' not found')); 
    }
}; 


const addNote = (title, body) => {
    const notes = loadNotes();  
    // find will stop after finding success, unlike filter which will look through all no matter what
    const duplicateNote = notes.find((note) => note.title === title); 

    if(!duplicateNote) {
        notes.push({
            title: title, 
            body: body
        }); 
        saveNotes(notes);
        console.log(chalk.green.inverse('Note Added')); 
    } else {
        console.log(chalk.red.inverse('Duplicate Note')); 

    }; 

}; 

const removeNote = (title) => {
    const notes = loadNotes(); 
    const notesKept = notes.filter((note) =>  note.title !== title ); 
    
    if (notes.length > notesKept.length){
        saveNotes(notesKept); 
        console.log(chalk.green.inverse('Note Removed'))
        } else {
        console.log(chalk.red.inverse('Note not present. Nothing removed'))
    }; 
}; 

const listNotes = () => {
    const notes = loadNotes(); 

    notes.forEach((note) => {
        console.log(note.title);
    }); 
}; 

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes); 
    fs.writeFileSync('notes.json', dataJSON); 
}; 

const loadNotes = () => {
    try {   
        const dataBuffer =  fs.readFileSync('notes.json'); 
        const dataJSON = dataBuffer.toString(); 
        return JSON.parse(dataJSON); 
    } catch (e) {
        return []; 
    }
}; 

module.exports = {
    getNotes: getNotes, 
    addNote: addNote, 
    removeNote: removeNote, 
    listNotes: listNotes, 
    readNote, readNote
}; 