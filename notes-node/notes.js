console.log('Notes.js');

var addNote = (title, body) => {
    console.log('Adding Note', title, body); 
}; 

var getAll  = () => {
    console.log('Getting all notes')
}; 

var getNote = (title) => {
    console.log('Getting note', title); 
}; 

var removeNote = (title) => {
    console.log('Getting note', title); 
}; 


module.exports =  {
    addNote : addNote, 
    getAll : getAll, 
    getNote : getNote, 
    removeNote : removeNote 
};  
 

// ES6
// module.exports =  {
//     addNote 
// }; 