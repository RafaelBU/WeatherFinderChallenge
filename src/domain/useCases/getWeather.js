import fecthWeather from "../../infrastructure/WeatherInfo/repositories/fetchWeatherInfo";

const getWeather = async ({city, country}) => {
    return await fecthWeather({city, country});
}

export default getWeather;