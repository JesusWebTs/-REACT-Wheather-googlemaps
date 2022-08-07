class WeatherInfoModel {
  id;
  token;
  name;
  constructor({ id, token, name }) {
    this.id = id;
    this.token = token;
    this.name = name;
  }
}

export default WeatherInfoModel;
