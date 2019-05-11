const fs = require('fs'); 

fs.writeFileSync('notes.txt', 'This file was made by node 2'); 

fs.appendFileSync('notes.txt', ' \n this was appended'); 