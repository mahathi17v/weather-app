const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherCard = document.getElementById("weatherCard");

const API_KEY = "YOUR_API_KEY";

async function getWeather(city) {
  weatherCard.style.display = "block";
  weatherCard.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );

    if (!res.ok) throw new Error("City not found");

    const data = await res.json();
    displayWeather(data);
  } catch (error) {
    weatherCard.innerHTML = error.message;
  }
}