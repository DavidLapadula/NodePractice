const path = require('path'); 
const express = require('express'); 

const app = express(); 

app.set('view engine', 'hbs'); 

app.use(express.static(path.join(__dirname, '../public')))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather', 
        name: 'David'
    }); 
}); 

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'David' 
    }); 
}); 

app.get('/help', (req, res) => {
    res.render('help', {
        helptext: 'Helpful text'
    }); 
}); 

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing', 
        location: 'Toronto'
    }); 
}); 

app.listen(3000, () => {
    console.log('Server is up on port 3000');
}); 