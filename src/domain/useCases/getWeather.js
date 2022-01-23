import fecthWeather from "../../infrastructure/WeatherInfo/repositories/fetchWeatherInfo";

const getWeather = async ({ city, country }) => {
  const fecthResponse = await fecthWeather({ city, country });
  return fecthResponse;
};

export default getWeather;
