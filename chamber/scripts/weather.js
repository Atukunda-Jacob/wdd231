const apiKey = "YOUR_API_KEY_HERE";
const lat = 0.3476;
const lon = 32.5825;
const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
const currentEl = document.querySelector("#current-weather");
const forecastEl = document.querySelector("#forecast");
async function apiFetch(url) {
  const r = await fetch(url);
  if (r.ok) return await r.json(); else throw Error(await r.text());
}
function displayCurrent(d) {
  currentEl.innerHTML = `<p><strong>${Math.round(d.main.temp)}&deg;C</strong> - ${d.weather[0].description}</p><p>High: ${Math.round(d.main.temp_max)}&deg;C | Low: ${Math.round(d.main.temp_min)}&deg;C</p><p>Humidity: ${d.main.humidity}%</p><p>Sunrise: ${new Date(d.sys.sunrise*1000).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})} | Sunset: ${new Date(d.sys.sunset*1000).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</p><img src="https://openweathermap.org/img/w/${d.weather[0].icon}.png" alt="${d.weather[0].description}" width="50" height="50">`;
}
function displayForecast(d) {
  const days = d.list.filter(i => i.dt_txt.includes("12:00:00")).slice(0,3);
  forecastEl.innerHTML = `<h3>3-Day Forecast</h3>` + days.map(day => `<p><strong>${new Date(day.dt_txt).toLocaleDateString("en-US",{weekday:"long"})}:</strong> ${Math.round(day.main.temp)}&deg;C - ${day.weather[0].description}</p>`).join("");
}
async function getWeather() {
  try {
    displayCurrent(await apiFetch(currentUrl));
    displayForecast(await apiFetch(forecastUrl));
  } catch(e){ console.log(e); currentEl.textContent="Weather unavailable"; }
}
getWeather();
