const days = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
};

class DailyWeatherInfo {
  day = "";
  humidity = "";
  pressure = "";
  temperature = 0;
  wind = { speed: 0, deg: 0, gust: 0 };
  weatherTipe = [{ id: 0, main: "", description: "", icon: "" }];
  constructor({ dayWeather }) {
    this.day = days[new Date(parseInt(`${dayWeather.sunrise}000`)).getDay()];
    this.humidity = dayWeather.humidity;
    this.pressure = dayWeather.pressure;
    this.temperature = dayWeather.temp.day;
    this.wind = {
      speed: dayWeather.wind_speed,
      deg: dayWeather.wind_deg,
      gust: dayWeather.wind_gust,
    };
    this.weatherTipe = dayWeather.weather;
  }
}

export default DailyWeatherInfo;
