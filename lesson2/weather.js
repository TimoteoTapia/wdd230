async function apiFetchWeather() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,US&units=imperial&appid=8ab554176497311d6a3d3d82330044e4";
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log("Weather", data);
      displayWeatherResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

//Forecast
async function apiFetchForecast() {
  const url =
    "https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,US&units=imperial&appid=8ab554176497311d6a3d3d82330044e4";
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log("Forecast", data); // this is for testing the call
      displayForecastResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayWeatherResults(data) {
  const temperature = data.main.temp;

  document.querySelector("#temperature").textContent = `${Math.round(
    temperature
  )}\u00B0C`;
  document.querySelector("#tempdesc").textContent = data.weather[0].description;
  document.querySelector("#humidity").textContent = data.main.humidity;
  document.querySelector(
    "#weatherPic"
  ).src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
}

const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function displayForecastResults(data) {
  const forecast = data.list.filter(
    ({ dt_txt }) => dt_txt.split(" ")[1] === "06:00:00"
  );
  console.log("forecast", forecast);

  forecast.forEach((weather, index) => {
    if (index < 3) {
      let date = new Date(weather.dt_txt);
      console.log("date", date);
      document.querySelector(`#weather${index + 1} .day span`).textContent =
        weekday[date.getDay()];
      document.querySelector(
        `#weather${index + 1} .weatherIcon`
      ).src = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;
      document.querySelector(
        `#weather${index + 1} .temperature span`
      ).textContent = `${Math.round(weather.main.temp)}\u00B0C`;
      document.querySelector(`#weather${index + 1} .tempdescrip`).textContent =
        weather.weather[0].description;
      document.querySelector(`#weather${index + 1} .humid`).textContent =
        weather.main.humidity;
    }
  });
}

apiFetchWeather();
apiFetchForecast();

// Drink Submissions
const submissionsDisplay = document.querySelector(".submissions");
let numsubmissions = Number(localStorage.getItem("submission"));
submissionsDisplay.textContent = numsubmissions;
