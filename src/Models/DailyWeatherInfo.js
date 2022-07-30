const days = {
  0: "Monday",
  1: "Tuesday",
  2: "Wednesday",
  3: "Thursday",
  4: "Friday",
  5: "Saturday",
  6: "Sunday",
  7: "Monday",
};

class DailyWeatherInfo {
  day = "";
  humidity = "";
  pressure = "";
  temperature = 0;
  wind = { speed: 0, deg: 0, gust: 0 };
  weatherTipe = [{ id: 0, main: "", description: "", icon: "" }];
  constructor({ dayWeather, day = 0 }) {
    console.log(day);
    this.day = days[day];
    console.log(this.day);
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
