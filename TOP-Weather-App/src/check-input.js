import { getWeatherData } from "./get-weather-data.js";
import { showWeatherInfo } from "./show-info.js";

const checkInput = () => {
  const locationInput = document.getElementById("location-input");
  const error = document.getElementById("show-error");
  const button = document.getElementById("submit");

  const inputEmpty = () => {
    return locationInput.value.trim() === "";
  };

  locationInput.addEventListener("input", () => {
    if (inputEmpty()) {
      locationInput.className = "error";
      error.innerHTML = "Cannot be empty";
      error.className = "invalid";
    } else {
      locationInput.className = "";
      error.innerHTML = "";
      error.className = "valid";
    }
  });

  button.addEventListener("click", async (event) => {
    event.preventDefault();
    if (inputEmpty()) {
      locationInput.className = "error";
      error.innerHTML = "Cannot be empty";
      error.className = "invalid";
    } else {
      const data = await getWeatherData(locationInput.value.trim());

      if (Object.hasOwn(data, "error")) {
        locationInput.className = "error";
        error.innerHTML = "Location not found";
        error.className = "invalid";
        console.error("Error fetching weather data");
      } else {
        locationInput.className = "";
        error.innerHTML = "";
        error.className = "valid";
        console.log("Weather data:", data);
        showWeatherInfo(data);
      }
    }
  });
};

export { checkInput };
