const result = document.querySelector('.weather-result');
const notFound = document.querySelector('.not-found');
const button = document.querySelector('.button');
const input = document.querySelector('.input');

function getWeather() {
    const inputVal = document.getElementById('input').value;
    if (!inputVal) {
        notFound.innerHTML = '';
        result.innerHTML = '';
        notFound.innerHTML += '<h3>Cannot find the city, please try again...</h3>' 
    } else {
        const city = document.getElementById('input').value;
        fetch(`http://localhost:3000/api/${city}`)
        .then(res => res.json())
        .then(res => addToDom(res))
    }
}

function addToDom(data) {
    if (!data.name) {
        notFound.innerHTML = '';
        result.innerHTML = '';
        notFound.innerHTML += '<h3>Cannot find the city, please try again...</h3>'} 
    else {
        notFound.innerHTML = '';
        result.innerHTML = '';
        result.innerHTML += `
        <h2>${data.name}</h2>
        <p>Temp: ${data.main.temp.toFixed()} &degC</p>
        <p>Feels Like: ${data.main.feels_like.toFixed()} &degC</p>
        <p>Description: ${data.weather[0].description}</p>
        <img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png'</img>
        <div class="last-3">
        <p>Min Temp: ${data.main.temp_min.toFixed()} &degC</p>
        <p>Max Temp: ${data.main.temp_max.toFixed()} &degC</p>
        </div>
        <p>Humidity: ${data.main.humidity.toFixed()} %</p>
        
        `;
} }


button.addEventListener('click', () => {
    getWeather();
    document.getElementById('input').value = '' ;
})


