import {
  DELETE_FAVORITE_WEATHER,
  DELETE_WEATHER,
  GET_ALL_FAVORITE_WEATHERS,
  GET_FOVORITE_WEATHER,
  GET_WEATHER,
  NEW_FAVORITE_WEATHER,
  NEW_WEATHER,
} from "./weatherActionTypes";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case DELETE_FAVORITE_WEATHER:
      return;
    case DELETE_WEATHER:
      return {
        ...state,
        weathers: state.weathers.filter((weather) => weather.id !== payload.id),
      };
    case GET_ALL_FAVORITE_WEATHERS:
      return;
    case GET_FOVORITE_WEATHER:
      return;
    case GET_WEATHER:
      return { ...state, weathers: payload.weathers };
    case NEW_FAVORITE_WEATHER:
      return;
    case NEW_WEATHER:
      return { ...state, weathers: [...state.weathers, payload] };
    default:
      console.log(`No VCase alid for Type ${type}`);
      return state;
  }
};

export default reducer;
