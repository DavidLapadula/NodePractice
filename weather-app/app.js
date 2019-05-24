const request = require('request');

const url = 'https://api.darksky.net/forecast/634ec3f82d1865218236976421b59ef2/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Cannot connect to weather service');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        console.log(response.body.daily.data[0].summary)
        console.log(`Its is currently ${response.body.currently.temperature} degrees out.`)
        console.log(`There is a ${response.body.currently.precipProbability} chance of rain.`);
    }
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGF2aWRsYXBhZHVsYSIsImEiOiJjancwMDJ3ZW4wNjA0M3ltdzhrNXlwNjM5In0.C2aiuF07gIUq_PsI15DxnA';

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Cannot connect to map service');
    } else if (!response.body.features.length) {
        console.log('Unable to find location. Try a new search term');
    } else {
        const latitude = response.body.features[0].center[1];
        const longitude = response.body.features[0].center[0];
    }
}); 
