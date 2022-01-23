import { render, fireEvent, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import WeatherForm from "../ui/components/WeatherForm";

jest.mock("../infrastructure/WeatherInfo/repositories/fetchWeatherInfo");

const setUp = () => {
  const utils = render(<WeatherForm />);
  const cityInput = screen.getByPlaceholderText("Madrid");
  const countryInput = screen.getByPlaceholderText("es");
  const button = screen.getByRole("button", { name: /get weather/i });

  return {
    cityInput,
    countryInput,
    button,
    ...utils,
  };
};

test("should change form inputs", async () => {
  const { cityInput, countryInput } = setUp();

  fireEvent.change(cityInput, { target: { value: "valencia" } });
  fireEvent.change(countryInput, { target: { value: "españa" } });

  expect(cityInput).toHaveDisplayValue("valencia");
  expect(countryInput).toHaveDisplayValue("españa");
});

test("should get info with correct params", async () => {
  const { button } = setUp();

  // find information
  await act(async () => {
    fireEvent.click(button);
  });

  const locationText = screen.getByTestId("Location");
  const temperatureText = screen.getByTestId("Temperature");
  const humidityText = screen.getByTestId("Humidity");
  const conditionsText = screen.getByTestId("Conditions");

  expect(locationText.innerHTML).toBe("Madrid , ES");
  expect(temperatureText.innerHTML).toBe("20");
  expect(humidityText.innerHTML).toBe("86");
  expect(conditionsText.innerHTML).toBe("overcast clouds");
});

test("should get error message", async () => {
  const { cityInput, countryInput, button } = setUp();

  fireEvent.change(cityInput, { target: { value: "fake city" } });
  fireEvent.change(countryInput, { target: { value: "fake country" } });

  // find information
  await act(async () => {
    fireEvent.click(button);
  });

  const errorText = screen.getByTestId("error");
  expect(errorText.innerHTML).toBe("city not found");
});
