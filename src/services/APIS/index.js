import WeatherApi from "./Weather";

const headers = {
  "Content-Type": "application/json",
};
const weatherApi = new WeatherApi({
  baseURL: "https://api.openweathermap.org",
  url: "/data/2.5",
  apiId: "f1b6451cd3757be0ba6199686929ceff",
  headers: headers,
});
export { weatherApi };
