import "./style.css";
import "@fontsource/roboto";
import { checkInput } from "./check-input.js";
import { getWeatherData } from "./get-weather-data.js";
import { showWeatherInfo } from "./show-info.js";

checkInput();
// Define getWeatherData before using it
const initialSetup = async () => {
  try {
    const res = await getWeatherData("london");
    showWeatherInfo(res);
  } catch (err) {
    console.error("Error fetching weather data:", err);
  }
};

initialSetup();
