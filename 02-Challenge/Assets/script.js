const search = document.querySelector('.search');
const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.searchBtn');
const history = document.querySelector('.history');

const current = document.querySelector('.current');
const name = document.querySelector('.name');
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
    fetch()
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
    })
};

function fetchForecast(city) {
    fetch()
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
    })
};