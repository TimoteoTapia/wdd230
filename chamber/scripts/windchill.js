const url = `https://api.openweathermap.org/data/2.5/weather?q=Mexico City,MX&units=imperial&appid=8ab554176497311d6a3d3d82330044e4`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

// function displayResults(weatherData) {}

const displayResults = (weatherData) => {
  let temperature = weatherData.main.temp;
  let windSpeed = weatherData.wind.speed;
  // let temperature = document.querySelector("#temperature").textContent;
  // let windSpeed = document.querySelector("#speed").textContent;

  document.querySelector("#temperature").textContent = `${Math.round(
    temperature
  )}\u00B0C`;
  const desc = weatherData.weather[0].description;
  document.querySelector("#desc").textContent = desc
    .split(" ")
    .map(capitalize)
    .join(" ");
  document.querySelector("#speed").textContent = `${windSpeed} km/h`;
  document.querySelector(
    ".whether-img"
  ).src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  //Celcious to farenheit
  temperature = (temperature * 9) / 5 + 32;
  windSpeed = windSpeed * 1.609; //km to miles

  let windChill = "N/A";
  if (temperature <= 50 && windSpeed > 3.0) {
    windChill =
      35.74 +
      0.6215 * temperature -
      35.75 * windSpeed ** 0.16 +
      0.4275 * temperature * windSpeed ** 0.16;
    document.querySelector("#chill").textContent = Math.round(windChill);
  }
  function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
    // return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
  }
  document.querySelector("#chill").textContent = windChill;
};
