import WeatherInfo from "../../../../domain/entities/WeatherInfo";

const fecthWeather = async ({ city, country }) => {
  const areValidValues = city !== "fake city" || country !== "fake country";
  const result = await new Promise((resolve, reject) => {
    areValidValues
      ? resolve(
          new WeatherInfo({
            temperature: 20,
            city: "Madrid",
            country: "ES",
            humidity: 86,
            description: "overcast clouds",
          })
        )
      : reject({ message: "city not found" });
  });
  return result;
};

export default fecthWeather;
