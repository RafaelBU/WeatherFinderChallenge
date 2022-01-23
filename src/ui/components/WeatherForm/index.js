import React, { useState } from "react";
import * as S from "./styles";
import getWeather from "../../../domain/useCases/getWeather";

export default function WeatherForm() {
  const getPreviousValues = ({ field }) => {
    if (localStorage.getItem("weatherInfo") === null) {
      return "";
    }

    const localInfo = JSON.parse(localStorage.getItem("weatherInfo"));
    return localInfo[field];
  };

  const [temperature, setTemperature] = useState(
    getPreviousValues({ field: "temperature" })
  );
  const [city, setCity] = useState(getPreviousValues({ field: "city" }));
  const [country, setCountry] = useState(
    getPreviousValues({ field: "country" })
  );
  const [humidity, setHumidity] = useState(
    getPreviousValues({ field: "humidity" })
  );
  const [description, setDescription] = useState(
    getPreviousValues({ field: "description" })
  );
  const [error, setError] = useState("");

  const resetStates = () => {
    setTemperature("");
    setCity("");
    setCountry("");
    setHumidity("");
    setDescription("");
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError("");
    const cityField = e.target.elements.city.value || "Madrid";
    const countryField = e.target.elements.country.value || "es";
    try {
      const response = await getWeather({
        city: cityField,
        country: countryField,
      });
      const { temperature, city, country, humidity, description } = response;
      setTemperature(temperature);
      setCity(city);
      setCountry(country);
      setHumidity(humidity);
      setDescription(description);
      localStorage.setItem(
        "weatherInfo",
        JSON.stringify({
          temperature,
          city,
          country,
          humidity,
          description,
        })
      );
    } catch (error) {
      resetStates();
      setError(error.message);
    }
  };

  const weatherFieldsConfig = [
    {
      id: "location",
      key: "Location",
      value: `${city} , ${country}`,
      valueCondition: city !== "" && country !== "",
    },
    {
      id: "temperature",
      key: "Temperature",
      value: temperature,
      valueCondition: temperature !== "",
    },
    {
      id: "humidity",
      key: "Humidity",
      value: humidity,
      valueCondition: humidity !== "",
    },
    {
      id: "conditions",
      key: "Conditions",
      value: description,
      valueCondition: description !== "",
    },
  ];

  return (
    <S.FormContainer>
      <form onSubmit={handleSubmitForm}>
        <S.Input
          type="text"
          name="city"
          placeholder="Madrid"
          defaultValue={getPreviousValues({ field: "city" })}
        />
        <S.Input
          type="text"
          name="country"
          placeholder="es"
          defaultValue={getPreviousValues({ field: "country" })}
        />
        <S.StyledButton>Get Weather</S.StyledButton>
      </form>
      <S.WeatherInfo>
        {weatherFieldsConfig.map(
          ({ id, key, value, valueCondition }) =>
            valueCondition && (
              <S.WeatherKey key={id}>
                {key} {""}
                <S.WeatherValue data-testid={key}>{value}</S.WeatherValue>
              </S.WeatherKey>
            )
        )}
        {error !== "" && (
          <S.WeatherError data-testid="error">{error}</S.WeatherError>
        )}
      </S.WeatherInfo>
    </S.FormContainer>
  );
}
