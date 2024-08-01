import { addBackground } from "./add-background";

const showWeatherInfo = (data) => {
  const content = document.getElementById("#content");
  const [tempC, tempF] = [data.current.feelslike_c, data.current.feelslike_f];
  const condition = data.current.condition.text;
  const uv = data.current.uv;
  const humidity = data.current.humidity;
  addBackground(condition);

  function getColorForUV(uvIndex) {
    const colors = [
      "#00FF00", // Green for UV index 0-2 (Low)
      "#FFFF00", // Yellow for UV index 3-5 (Moderate)
      "#FFA500", // Orange for UV index 6-7 (High)
      "#FF0000", // Red for UV index 8-10 (Very High)
      "#8B00FF", // Violet for UV index 11+ (Extreme)
    ];

    if (uvIndex >= 0 && uvIndex <= 2) {
      return colors[0];
    } else if (uvIndex >= 3 && uvIndex <= 5) {
      return colors[1];
    } else if (uvIndex >= 6 && uvIndex <= 7) {
      return colors[2];
    } else if (uvIndex >= 8 && uvIndex <= 10) {
      return colors[3];
    } else if (uvIndex >= 11) {
      return colors[4];
    } else {
      return "#000000"; // Black for invalid UV index
    }
  }

  document.getElementById("humidity").innerHTML = humidity;
  document.getElementById("uv").innerHTML = uv;
  document.getElementById("tempC").innerHTML = `${tempC}°C`;
  document.getElementById("tempF").innerHTML = `${tempF}°F`;
  document.getElementById("condition").innerHTML = condition;
  document.getElementById("uv-container").style.backgroundColor =
    getColorForUV(uv);
};

export { showWeatherInfo };
