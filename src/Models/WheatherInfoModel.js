class WeatherInfoModel {
  coord = { lat: 0, lon: 0 };
  country = "";
  humidity = "";
  name = "";
  pressure = "";
  temperature = 0;
  timeZone = 0;
  weatherTipe = [{ id: 0, main: "", description: "", icon: "" }];
  wind = { speed: 0, deg: 0, gust: 0 };
  constructor({ weather }) {
    console.log(weather);
    this.coord = weather[0].coord;
    this.country = weather[0].sys.country;
    this.humidity = weather[0].main.humidity;
    this.name = weather[0].name;
    this.pressure = weather[0].main.pressure;
    this.temperature = this.__convertKelvinToDegree(weather[0].main.temp);
    this.timeZone = weather[0].timezone;
    this.weatherTipe = weather[0].weather;
    this.wind = weather[0].wind;
  }

  __convertFahrenheitToDegree = (farengeis = 0) => farengeis - 32 / 1.8;
  __convertKelvinToDegree = (kelvin = 0) => kelvin - 273.15;

  __getPredictionEverySelectedTime = ({ time = 1, forecast = [] }) => {};
}

export default WeatherInfoModel;
