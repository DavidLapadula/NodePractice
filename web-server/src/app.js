const path = require('path'); 
const express = require('express'); 
const hbs = require('hbs'); 

const app = express(); 

// Define paths for Express confog
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, './templates/views'); 
const partialsPath = path.join(__dirname, './templates/partials'); 


// Setup handlebars engine and views location
app.set('view engine', 'hbs'); 
app.set('views', viewsPath);
hbs.registerPartials(partialsPath); 

// Setup static directory to serve
app.use(express.static(path.join(publicDirectoryPath))); 

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
        title: 'Help', 
        name: 'David', 
        helptext: 'Helpful text'
    }); 
}); 

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing', 
        location: 'Toronto'
    }); 
}); 

app.get('/help/*', (req, res) => {
    res.render('404',  {
        title: '404', 
        name: 'David',
        errorMessage: 'Help article not found' 
    }); 
}); 

app.get('*', (req, res) => {
    res.render('404',  {
        title: '404', 
        name: 'David',
        errorMessage: 'Page not found' 
    }); 
}); 

app.listen(3000, () => {
    console.log('Server is up on port 3000');
}); 