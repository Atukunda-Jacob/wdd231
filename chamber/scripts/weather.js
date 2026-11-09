const apiKey = "YOUR_API_KEY_HERE";
const lat = 0.3476;
const lon = 32.5825;
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const currentEl = document.querySelector("#current-weather");
const forecastEl = document.querySelector("#forecast");

async function apiFetch(url) {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(await response.text());
  }
}

function displayCurrent(data) {
  const temp = Math.round(data.main.temp);
  const desc = data.weather[0].description;
  const icon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  currentEl.innerHTML = `
    <p><strong>${temp}&deg;C</strong> - ${desc}</p>
    <p>High: ${Math.round(data.main.temp_max)}&deg;C | Low: ${Math.round(data.main.temp_min)}&deg;C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})} | Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'})}</p>
    <img src="${icon}" alt="${desc}" width="50" height="50">`;
}

function displayForecast(data) {
  const days = data.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);
  forecastEl.innerHTML = `<h3>3-Day Forecast</h3>` + days.map(day => {
    const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: "long" });
    return `<p><strong>${date}:</strong> ${Math.round(day.main.temp)}&deg;C - ${day.weather[0].description}</p>`;
  }).join("");
}

async function getWeather() {
  try {
    const current = await apiFetch(currentUrl);
    displayCurrent(current);
    const forecast = await apiFetch(forecastUrl);
    displayForecast(forecast);
  } catch (error) {
    console.log(error);
    currentEl.textContent = "Weather unavailable";
  }
}
getWeather();
