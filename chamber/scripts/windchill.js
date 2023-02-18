let temperature = document.querySelector("#temperature").textContent;
let windSpeed = document.querySelector("#speed").textContent;

document.querySelector("#temperature").textContent = `${temperature}\u00B0C`;
document.querySelector("#speed").textContent = `${windSpeed} km/h`;

temperature = (temperature * 9) / 5 + 32; //Celcious to farenheit
windSpeed = windSpeed * 1.609; //km to miles

let windChill = "N/A";
if (temperature <= 50 && windSpeed > 3.0) {
  windChill =
    35.74 +
    0.6215 * temperature -
    35.75 * windSpeed ** 0.16 +
    0.4275 * temperature * windSpeed ** 0.16;
}

document.querySelector("#chill").textContent = Math.round(windChill);
