import WeatherInfo from "../../../domain/entities/WeatherInfo";

const restoreWeatherInfo = (data) => {
    const { main, name, sys, weather} = data;
    return new WeatherInfo({
        temperature: main?.temp,
        city: name,
        country: sys?.country,
        humidity: main?.humidity,
        description: weather && weather[0]?.description,
    });
};

export default restoreWeatherInfo;