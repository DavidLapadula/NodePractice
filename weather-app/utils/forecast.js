const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/634ec3f82d1865218236976421b59ef2/${latitude},${longitude}`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Cannot connect to weather service', undefined);
        } else if (body.error) {
            callback('Bad request please try again', undefined);
        } else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                precip: body.currently.precipProbability
            });
        }
    });
};

module.exports = forecast; 