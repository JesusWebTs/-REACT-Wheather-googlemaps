import Request from "../Abstracts/Request";
import WheatherInfoModel from "../../../Models/WheatherInfoModel";

class Weather extends Request {
  _apiId;
  constructor({ baseURL, headers, url, apiId }) {
    super({ baseURL, headers, url });
    this.appId = apiId;
  }
  async getCurrentWeather({ lat, lng }) {
    return await this.get({
      endPoint: `/weather?lat=${lat}&lon=${lng}&appid=${this.appId}`,
    }).catch((el) => console.log(el));
  }
  async getForecastHourly({ lat, lng }) {
    return await this.get({
      endPoint: `/forecast?lat=${lat}&lon=${lng}&appid=${this.appId}`,
    }).catch((el) => console.log(el));
  }

  async getFullWeatherPrediction({ lat, lng }) {
    let weather = await Promise.all([
      this.getCurrentWeather({ lat, lng }),
      this.getForecastHourly({ lat, lng }),
    ]).catch((el) => console.log(el));
    return new WheatherInfoModel({ weather });
  }

  async getMultipleFullWeatherPrediction(data = []) {
    return Promise.all(data.map((el) => this.getFullWeatherPrediction(el)));
  }
}

export default Weather;
