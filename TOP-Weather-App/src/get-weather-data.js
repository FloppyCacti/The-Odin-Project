const getWeatherData = (location) => {
  //request data for a location
  const requestUrl = () => {
    //api key
    const apiKey = "key=848757827fc14e0bba3160706240107";
    const baseLink = "http://api.weatherapi.com/v1/current.json?";

    return `${baseLink}${apiKey}&q=${location}`;
  };

  const getData = async () => {
    const url = requestUrl();

    try {
      const response = await fetch(url, { mode: "cors" });
      const data = await response.json();
      return data;
    } catch (err) {
      return err;
    }
  };

  return getData();
};

export { getWeatherData };
