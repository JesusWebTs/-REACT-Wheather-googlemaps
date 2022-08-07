import { DELETE_WEATHER, NEW_WEATHER } from "./weatherActionTypes";
import { weatherApi } from "../../services/APIS";

const newFavoriteWeather = (dispatch) => {
  return (data) => {};
};
const newWeather = (dispatch) => {
  return async (data) => {
    return dispatch({
      type: NEW_WEATHER,
      payload: await weatherApi.getFullWeatherPrediction(data),
    });
  };
};
const getWeather = (dispatch) => {
  return (data) =>
    dispatch({
      type: NEW_WEATHER,
      payload: data,
    });
};
const deleteFavoriteWeather = (dispatch) => {
  return (data) => {
    return dispatch({
      type: NEW_WEATHER,
      payload: data,
    });
  };
};
const getAllWeathers = (dispatch) => {
  return (data) =>
    dispatch({
      type: NEW_WEATHER,
      payload: data,
    });
};
const addNewWeather = (dispatch) => {
  return (data) =>
    dispatch({
      type: NEW_WEATHER,
      payload: data,
    });
};
const getWheaters = (dispatch) => {
  return (data) =>
    dispatch({
      type: NEW_WEATHER,
      payload: data,
    });
};
const deleteWeather = (dispatch) => {
  return (data) => {
    return dispatch({
      type: DELETE_WEATHER,
      payload: data,
    });
  };
};

export {
  newFavoriteWeather,
  getWeather,
  deleteFavoriteWeather,
  getAllWeathers,
  addNewWeather,
  getWheaters,
  deleteWeather,
  newWeather,
};
