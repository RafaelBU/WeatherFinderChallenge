export default class WeatherInfo {
  city;

  country;

  temperature;

  humidity;

  description;

  constructor({
    city = "",
    country = "",
    temperature = 0,
    humidity = 0,
    description = "",
  }) {
    this.city = city;
    this.country = country;
    this.temperature = temperature;
    this.humidity = humidity;
    this.description = description;
  }
}
