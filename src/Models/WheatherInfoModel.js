import { v4 as uuidv4 } from "uuid";
import DailyWeatherInfo from "./DailyWeatherInfo";

class WeatherInfoModel {
  id = 0;
  coord = { lat: 0, lon: 0 };
  country = "";
  humidity = "";
  name = "";
  pressure = "";
  temperature = 0;
  timeZone = 0;
  weatherTipe = [{ id: 0, main: "", description: "", icon: "" }];
  wind = { speed: 0, deg: 0, gust: 0 };
  forecast = [];
  constructor({ weather }) {
    this.id = uuidv4();
    this.coord = weather[0].coord ?? this.coord;
    this.country = weather[0].sys.country ?? this.country;
    this.humidity = weather[0].main.humidity;
    this.name = weather[0].name ?? null;
    this.pressure = weather[0].main.pressure;
    this.temperature = this.__convertKelvinToDegree(weather[0].main.temp);
    this.timeZone = weather[0].timezone ?? null;
    this.weatherTipe = weather[0].weather;
    this.wind = weather[0].wind;

    this.dailyWeather = weather[1]
      ? weather[1].daily.map(
          (dayWeather, index) =>
            new DailyWeatherInfo({ dayWeather, day: index })
        )
      : [];
  }

  __convertFahrenheitToDegree = (farengeis = 0) => farengeis - 32 / 1.8;
  __convertKelvinToDegree = (kelvin = 0) => kelvin - 273.15;

  __getDailyForeCast = ({ forecast = [] }) => {};
  __getHourlyForeCast = ({ forecast = [] }) => {};
}

export default WeatherInfoModel;
