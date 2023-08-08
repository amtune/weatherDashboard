const search = document.querySelector(".search");
const searchInput = document.querySelector(".searchInput");
const searchBtn = document.querySelector(".searchBtn");
const history = document.querySelector(".history");

const nameEl = document.querySelector(".name");
const icon = document.querySelector(".icon");
const temp = document.querySelector(".temp");
const hum = document.querySelector(".hum");
const wind = document.querySelector(".wind");

const forecast = document.querySelector(".forecast");
const card = document.querySelectorAll(".card");

const key = "59c6b51f552be3550f1167e399494944";

searchBtn.addEventListener("click", function (event) {
	event.preventDefault();
	let cityName = searchInput.value;
	fetchCurrent(cityName);
	fetchForecast(cityName);
});

function fetchCurrent(city) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=imperial`,
	)
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			const date = new Date();
			const month = date.getMonth() + 1;
			const day = date.getDate();
			const year = date.getFullYear();
			nameEl.innerHTML = data.name + " " + `${month}/${day}/${year}`;
			icon.setAttribute(
				"src",
				`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
			);
            icon.setAttribute("alt", data.weather[0].description)
			temp.innerHTML = `Temp: ${data.main.temp}&#176F`;
			hum.innerHTML = `Hum: ${data.main.humidity}%`;
			wind.innerHTML = `Wind: ${data.wind.speed}mph`;
		});
}

function fetchForecast(city) {
	fetch(
		`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=imperial`,
	)
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			console.log(data);
			for (let i = 0; i < card.length; i++) {
				const index = i * 8 + 4;
				const date = new Date(data.list[index].dt * 1000);
				const month = date.getMonth() + 1;
				const day = date.getDate();
				const year = date.getFullYear();
                var h4 = document.createElement("h4")
                h4.innerHTML = `${month}/${day}/${year}`
                card[i].append(h4)
                const img = document.createElement("img")
                img.setAttribute("src", `https://openweathermap.org/img/wn/${data.list[index].weather[0].icon}.png`)
                img.setAttribute("alt", data.list[index].weather[0].description)
                card[i].append(img)

                var temp = document.createElement("li")
                temp.innerHTML = `Temp: ${data.list[index].main.temp}&#176F`
                card[i].append(temp)

                var hum = document.createElement("li")
                hum.innerHTML = `Hum: ${data.list[index].main.humidity}%`
                card[i].append(hum)

                var wind = document.createElement("li")
                wind.innerHTML = `Wind: ${data.list[index].wind.speed}mph`
                card[i].append(wind)
			}
		});
}
