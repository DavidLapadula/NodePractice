const request = require('request');

const url = 'https://api.darksky.net/forecast/634ec3f82d1865218236976421b59ef2/37.8267,-122.4233';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body); 
    console.log(data.currently);
}); 