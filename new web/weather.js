// weather.js

const weatherData = {
  dhaka: {
    temp: "32°C",
    condition: "Sunny",
    humidity: "60%",
    risk: "Low"
  },
  chattogram: {
    temp: "30°C",
    condition: "Partly Cloudy",
    humidity: "70%",
    risk: "Medium"
  },
  rajshahi: {
    temp: "34°C",
    condition: "Sunny",
    humidity: "55%",
    risk: "Low"
  },
  sylhet: {
    temp: "28°C",
    condition: "Rainy",
    humidity: "80%",
    risk: "High (Flooding possible)"
  },
  khulna: {
    temp: "33°C",
    condition: "Hot and Dry",
    humidity: "45%",
    risk: "Medium"
  },
  comilla: {
    temp: "33°C",
    condition: "Sunny",
    humidity: "55%",
    risk: "Low"
  },
};

document.getElementById("areaSelect").addEventListener("change", function () {
  const selected = this.value;
  updateWeather(selected);
});

document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "farmer.html"; // Go back to main dashboard
});

function updateWeather(area) {
  const data = weatherData[area];
  const card = document.getElementById("weatherCard");

  if (data) {
    card.innerHTML = `
      <h2>Weather in ${capitalize(area)}</h2>
      <p><strong>Temperature:</strong> ${data.temp}</p>
      <p><strong>Condition:</strong> ${data.condition}</p>
      <p><strong>Humidity:</strong> ${data.humidity}</p>
      <p><strong>Climate Risk:</strong> ${data.risk}</p>
    `;
  } else {
    card.innerHTML = `<p>No data available.</p>`;
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Initial load
updateWeather("dhaka");
