console.log("JS file loaded");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  console.log("City being sent:", `"${city}"`);
  getWeather(city);
});
const weatherCard = document.getElementById("weatherCard");

const API_KEY = "YOUR_API_KEY";

async function getWeather(city) {
  weatherCard.style.display = "block";
  weatherCard.innerHTML = "Loading...";

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&units=metric&appid=${API_KEY}`
    );

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message); // <-- REAL API MESSAGE
    }

    displayWeather(data);

  } catch (error) {
    weatherCard.innerHTML = error.message;
  }
}

