const search = document.querySelector('.search');
const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.searchBtn');
const history = document.querySelector('.history');

const nameEl = document.querySelector('.name');
const icon = document.querySelector('.icon');
const temp = document.querySelector('.temp');
const hum = document.querySelector('.hum');
const wind = document.querySelector('.wind');

const forecast = document.querySelector('.forecast');
const card = document.querySelectorAll('.card');

const key = "59c6b51f552be3550f1167e399494944"

searchBtn.addEventListener("click", function(event) {
    event.preventDefault();
    let cityName = searchInput.value;
    fetchCurrent(cityName);
    fetchForecast(cityName);
});

function fetchCurrent(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data)
        nameEl.innerHTML = data.name
        icon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
        icon.setAttribute("alt", data.weather[0].description)
        temp.innerHTML = `Temp: ${data.main.temp}&#176F`
        hum.innerHTML = `Hum: ${data.main.humidity}%`
        wind.innerHTML = `Wind: ${data.wind.speed}mph`
    });
};

function fetchForecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=imperial`)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data)
    });
};