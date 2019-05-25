const https = require('https');

const url = `https://api.darksky.net/forecast/634ec3f82d1865218236976421b59ef2/40,-75`;

const request = https.request(url, (response) => {
    let data = ''; 
    
    // when data comes in
    response.on('data', (chunk) => {
        data = data + chunk.toString(); 
    }); 

    response.on('end', () => {
        const body = JSON.parse(data); 
    }); 

}); 

request.on('error', (error) => {
    console.log('Error', error);
}); 

request.end(); 