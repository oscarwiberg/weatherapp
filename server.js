const express = require('express');
const fetch = require ('node-fetch')
const app = express();
const bodyParser = require('body-parser');
const apiKey = require('./apiKeys');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/:city', async(req, res) => {
    const city = req.params.city
    const weatherApi = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey.apiKey}`)
    const weatherData = await weatherApi.json();
    res.json(weatherData);
})


const PORT = 3000
app.listen(PORT, () => console.log(`This awesome app is listening on port ${PORT}!`))