const weatherData = {
  Seattle: {
    city: "Seattle",
    condition: "Partly cloudy",
    icon: "⛅",
    temp: 23,
    feelsLike: 25,
    humidity: 54,
    wind: "14 km/h",
    precip: "12%",
    uvIndex: "5/10",
    time: "Tue, 3:30 PM",
    hourly: [
      { time: "Now", icon: "⛅", temp: "23°" },
      { time: "1 PM", icon: "🌤️", temp: "24°" },
      { time: "2 PM", icon: "🌤️", temp: "25°" },
      { time: "3 PM", icon: "☀️", temp: "27°" },
      { time: "4 PM", icon: "🌦️", temp: "24°" },
      { time: "5 PM", icon: "🌧️", temp: "22°" }
    ],
    weekly: [
      { day: "Mon", icon: "☀️", low: "18°", high: "25°" },
      { day: "Tue", icon: "⛅", low: "19°", high: "24°" },
      { day: "Wed", icon: "🌦️", low: "17°", high: "23°" },
      { day: "Thu", icon: "🌧️", low: "16°", high: "21°" },
      { day: "Fri", icon: "☁️", low: "15°", high: "20°" },
      { day: "Sat", icon: "🌤️", low: "18°", high: "26°" },
      { day: "Sun", icon: "☀️", low: "20°", high: "28°" }
    ]
  },
  Tokyo: {
    city: "Tokyo",
    condition: "Warm and humid",
    icon: "🌤️",
    temp: 29,
    feelsLike: 31,
    humidity: 68,
    wind: "18 km/h",
    precip: "30%",
    uvIndex: "7/10",
    time: "Tue, 9:30 AM",
    hourly: [
      { time: "Now", icon: "🌤️", temp: "29°" },
      { time: "1 PM", icon: "☀️", temp: "31°" },
      { time: "2 PM", icon: "🌤️", temp: "32°" },
      { time: "3 PM", icon: "🌦️", temp: "30°" },
      { time: "4 PM", icon: "🌧️", temp: "28°" },
      { time: "5 PM", icon: "⛅", temp: "27°" }
    ],
    weekly: [
      { day: "Mon", icon: "☀️", low: "25°", high: "32°" },
      { day: "Tue", icon: "🌤️", low: "26°", high: "33°" },
      { day: "Wed", icon: "🌧️", low: "24°", high: "31°" },
      { day: "Thu", icon: "☁️", low: "24°", high: "30°" },
      { day: "Fri", icon: "🌦️", low: "23°", high: "29°" },
      { day: "Sat", icon: "☀️", low: "25°", high: "32°" },
      { day: "Sun", icon: "🌤️", low: "26°", high: "33°" }
    ]
  },
  "New York": {
    city: "New York",
    condition: "Light rain",
    icon: "🌦️",
    temp: 19,
    feelsLike: 18,
    humidity: 74,
    wind: "11 km/h",
    precip: "58%",
    uvIndex: "4/10",
    time: "Tue, 6:30 AM",
    hourly: [
      { time: "Now", icon: "🌦️", temp: "19°" },
      { time: "1 PM", icon: "🌧️", temp: "17°" },
      { time: "2 PM", icon: "🌧️", temp: "16°" },
      { time: "3 PM", icon: "☁️", temp: "15°" },
      { time: "4 PM", icon: "🌦️", temp: "18°" },
      { time: "5 PM", icon: "☀️", temp: "20°" }
    ],
    weekly: [
      { day: "Mon", icon: "🌧️", low: "14°", high: "18°" },
      { day: "Tue", icon: "🌦️", low: "13°", high: "17°" },
      { day: "Wed", icon: "☁️", low: "12°", high: "16°" },
      { day: "Thu", icon: "🌧️", low: "11°", high: "15°" },
      { day: "Fri", icon: "☀️", low: "14°", high: "19°" },
      { day: "Sat", icon: "🌤️", low: "16°", high: "21°" },
      { day: "Sun", icon: "☀️", low: "18°", high: "23°" }
    ]
  },
  "Cape Town": {
    city: "Cape Town",
    condition: "Clear sky",
    icon: "☀️",
    temp: 21,
    feelsLike: 22,
    humidity: 46,
    wind: "9 km/h",
    precip: "8%",
    uvIndex: "6/10",
    time: "Tue, 2:30 PM",
    hourly: [
      { time: "Now", icon: "☀️", temp: "21°" },
      { time: "1 PM", icon: "☀️", temp: "22°" },
      { time: "2 PM", icon: "🌤️", temp: "23°" },
      { time: "3 PM", icon: "☀️", temp: "24°" },
      { time: "4 PM", icon: "⛅", temp: "22°" },
      { time: "5 PM", icon: "⛅", temp: "21°" }
    ],
    weekly: [
      { day: "Mon", icon: "☀️", low: "18°", high: "25°" },
      { day: "Tue", icon: "☀️", low: "19°", high: "26°" },
      { day: "Wed", icon: "🌤️", low: "18°", high: "24°" },
      { day: "Thu", icon: "⛅", low: "17°", high: "23°" },
      { day: "Fri", icon: "☁️", low: "16°", high: "22°" },
      { day: "Sat", icon: "☀️", low: "18°", high: "24°" },
      { day: "Sun", icon: "☀️", low: "20°", high: "27°" }
    ]
  },
  Mumbai: {
    city: "Mumbai",
    condition: "Thunderstorm",
    icon: "⛈️",
    temp: 31,
    feelsLike: 34,
    humidity: 82,
    wind: "22 km/h",
    precip: "72%",
    uvIndex: "8/10",
    time: "Tue, 8:00 PM",
    hourly: [
      { time: "Now", icon: "⛈️", temp: "31°" },
      { time: "1 PM", icon: "🌧️", temp: "30°" },
      { time: "2 PM", icon: "⛈️", temp: "29°" },
      { time: "3 PM", icon: "🌩️", temp: "28°" },
      { time: "4 PM", icon: "🌧️", temp: "29°" },
      { time: "5 PM", icon: "⛈️", temp: "30°" }
    ],
    weekly: [
      { day: "Mon", icon: "⛈️", low: "27°", high: "33°" },
      { day: "Tue", icon: "🌧️", low: "26°", high: "31°" },
      { day: "Wed", icon: "⛈️", low: "26°", high: "32°" },
      { day: "Thu", icon: "🌩️", low: "25°", high: "30°" },
      { day: "Fri", icon: "🌧️", low: "27°", high: "32°" },
      { day: "Sat", icon: "☀️", low: "28°", high: "34°" },
      { day: "Sun", icon: "🌤️", low: "29°", high: "35°" }
    ]
  }
};

const cityInput = document.getElementById("cityInput");
const searchForm = document.getElementById("searchForm");
const hourlyForecast = document.getElementById("hourlyForecast");
const weeklyForecast = document.getElementById("weeklyForecast");

function renderForecast(itemList, container, type) {
  container.innerHTML = itemList
    .map((item) => {
      if (type === "hourly") {
        return `
          <div class="hourly-item">
            <span class="time">${item.time}</span>
            <span class="icon" aria-label="${item.time} weather">${item.icon}</span>
            <span class="summary">${item.temp}</span>
            <span class="temp">${item.temp}</span>
          </div>
        `;
      }

      return `
        <div class="daily-item">
          <span class="day">${item.day}</span>
          <span class="icon" aria-label="${item.day} weather">${item.icon}</span>
          <span class="range">${item.low} / ${item.high}</span>
          <span class="temp">${item.high}°</span>
        </div>
      `;
    })
    .join("");
}

function renderWeather(cityName) {
  const weather = weatherData[cityName] || weatherData.Seattle;

  document.getElementById("cityName").textContent = weather.city;
  document.getElementById("conditionIcon").textContent = weather.icon;
  document.getElementById("conditionText").textContent = weather.condition;
  document.getElementById("currentTemp").textContent = `${weather.temp}°`;
  document.getElementById("feelsLike").textContent = `Feels like ${weather.feelsLike}°`;
  document.getElementById("currentTime").textContent = weather.time;
  document.getElementById("humidity").textContent = `${weather.humidity}%`;
  document.getElementById("wind").textContent = weather.wind;
  document.getElementById("precip").textContent = weather.precip;
  document.getElementById("uvIndex").textContent = weather.uvIndex;

  renderForecast(weather.hourly, hourlyForecast, "hourly");
  renderForecast(weather.weekly, weeklyForecast, "daily");
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputValue = cityInput.value.trim();

  if (!inputValue) {
    cityInput.focus();
    return;
  }

  const lookupCity = Object.keys(weatherData).find(
    (city) => city.toLowerCase() === inputValue.toLowerCase()
  );

  if (lookupCity) {
    renderWeather(lookupCity);
    cityInput.value = "";
    return;
  }

  const fallbackCity = inputValue.charAt(0).toUpperCase() + inputValue.slice(1).toLowerCase();
  const matchedCity = Object.keys(weatherData).find((city) => city.startsWith(fallbackCity));

  if (matchedCity) {
    renderWeather(matchedCity);
  } else {
    renderWeather("Seattle");
  }

  cityInput.value = "";
});

renderWeather("Seattle");
