import restoreWeatherInfo from "../builders/restoreWeatherInfo";

const fecthWeather = async ({ city, country }) => {
  const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;
  const api_call = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
  );
  const data = await api_call.json();
  if (data.cod !== 200) {
    throw new Error(data.message);
  } else {
    return restoreWeatherInfo(data);
  }
};

export default fecthWeather;
