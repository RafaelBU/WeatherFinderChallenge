import React, {useState} from 'react';
import * as S from './styles';

export default function WeatherForm() {
    const [state, setState] = useState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined,
      })
    
    const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;

    const getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value || "Madrid";
        const country = e.target.elements.country.value || "es";
        const api_call = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await api_call.json();
        if (city && country) {
          setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: "",
          });
        } else {
          fsetState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            humidity: undefined,
            description: undefined,
            error: "Please enter the values.",
          });
        }
      };

  const weatherFieldsConfig = [
    {
      id: 'location',
      key: 'Location',
      value: `${state.city} , ${state.country}`,
      valueCondition: state.city && state.country
    },
    {
      id: 'temperature',
      key: 'Temperature',
      value: state.temperature,
      valueCondition: state.temperature
    },
    {
      id: 'humidity',
      key: 'Humidity',
      value: state.humidity,
      valueCondition: state.humidity
    },
    {
      id: 'conditions',
      key: 'Conditions',
      value: state.description,
      valueCondition: state.description,
    }
  ]
    
  return (
    <S.FormContainer>
        <form onSubmit={getWeather}>
            <S.Input type="text" name="city" placeholder="Madrid" />
            <S.Input type="text" name="country" placeholder="es" />
            <S.StyledButton>Get Weather</S.StyledButton>
        </form>
        <S.WeatherInfo>
          {
            weatherFieldsConfig.map(({id, key, value, valueCondition}) => (
              valueCondition && (
                <S.WeatherKey key={id}>
                  {key} {""}
                  <S.WeatherValue>
                      {value}
                  </S.WeatherValue>
              </S.WeatherKey>
              )
            ))
          }
            {state.error && (
                <S.WeatherError>{state.error}</S.WeatherError>
            )}
        </S.WeatherInfo>
  </S.FormContainer>
  )
}
