const apiKey = "6512720a76bed1a8ef51890cf41ddaae";
const lat = 0.3476;
const lon = 32.5825;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById("temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("desc").textContent = data.weather[0].description;
    document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById("temp-high").textContent = `${Math.round(data.main.temp_max)}°C`;
    document.getElementById("temp-low").textContent = `${Math.round(data.main.temp_min)}°C`;
  } catch (error) {
    document.getElementById("temp").textContent = "Weather unavailable";
  }
}
getWeather();
