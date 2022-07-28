import Request from "../Abstracts/Request";

class Weather extends Request {
  _apiId;
  constructor({ baseURL, headers, url, apiId }) {
    super({ baseURL, headers, url });
    this.appId = apiId;
  }
  async getCurrentWeather({ lat, lng }) {
    return await this.get({
      endPoint: `/weather?lat=${lat}&lon=${lng}&appid=${this.appId}`,
    });
  }
}

export default Weather;
