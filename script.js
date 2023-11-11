async function getWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87268e7d19d983649fa560b00ac07de8&units=metric`
  );
  const weatherData = await response.json();
  console.log(weatherData);
  putDataOnPage(weatherData);
}
function putDataOnPage(weatherData) {
  const cityElem = document.querySelector("h2.city");
  cityElem.innerText = weatherData.name;
  const tempElem = document.querySelector("h1.temp");
  tempElem.innerText = `${weatherData.main.temp}°C`;
  const humidityElem = document.querySelector(".humidity");
  humidityElem.innerText = `${weatherData.main.humidity}%`;
  const windElem = document.querySelector(".wind");
  windElem.innerText = `${weatherData.wind.speed}km/h`;
}
function searchCity() {
  const searchInput = document.querySelector(".search input");
  console.log("button was clicked", searchInput.value);
  getWeather(searchInput.value);
  localStorage.setItem("city", searchInput.value);
}
const city = localStorage.getItem("city");
if (city) {
  getWeather(city);
} else {
  getWeather("Osaka");
}

const searchButton = document.querySelector(".search button");
searchButton.addEventListener("click", searchCity);
