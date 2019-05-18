const fs = require('fs'); 

// const book = {
//     title: 'Title', 
//     author: 'David'
// }; 

// const bookJSON = JSON.stringify(book); 

// fs.writeFileSync('1-json.json', bookJSON); 

// const dataBuffer = fs.readFileSync('1-json.json'); 
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON); 

const buffer2 = fs.readFileSync('1-json.json'); 
const data2 = buffer2.toString(); 
const parsed = JSON.parse(data2); 
parsed.name = 'Anthony'; 

const newUser = JSON.stringify(parsed); 
fs.writeFileSync('1-json.json', newUser); 

