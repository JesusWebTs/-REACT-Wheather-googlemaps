class Request {
  _url;
  _baseURL;
  _headers;
  _request;
  constructor({ url = "", baseURL = "", headers = "" }) {
    this._url = url;
    this._headers = headers;
    this._baseURL = baseURL;
  }

  async _request({ method = "GET", data = null, endPoint = "" }) {
    return fetch(`${this._baseURL}${this._url}${endPoint}`, {
      method,
      body: data ? JSON.stringify(data) : null,
      mode: "cors",
    })
      .then((el) => {
        return el.json();
      })
      .then((json) => json)
      .catch((err) => {
        console.log(err);
      });
  }

  async get({ endPoint = "" }) {
    return this._request({
      endPoint: endPoint,
      method: "GET",
    }).then((res) => {
      return res;
    });
  }
  async getOne({ id = "", endPoint = "" }) {
    return this._request({
      url: `${endPoint}/${id}`,
      method: "GET",
    }).then((res) => {
      return res;
    });
  }
  async post({ value = null, endPoint = "" }) {
    return this._request({
      endPoint: endPoint,
      data: value,
      method: "POST",
    }).then((res) => {
      return res;
    });
  }
  async put({ value = null, id = "", endPoint = "" }) {
    return this._request({
      endPoint: `${endPoint}/${id}`,
      data: value,
      method: "PUT",
    }).then((res) => {
      return res;
    });
  }
  async delete({ uuid = "", endPoint = "" }) {
    return this._request({
      endPoint: `${endPoint}/${this._url}`,
      data: { uuid },
      method: "DELETE",
    }).then((res) => {
      return res;
    });
  }
}
export default Request;
