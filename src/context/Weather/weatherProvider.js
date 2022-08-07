import { createContext, useReducer, useContext } from "react";
import weatherReducer from "./weatherReducer";
import initialState from "./weatherInitialState";
import * as weatherActions from "./weatherActions";
const WeatherContext = createContext(initialState);

export const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, initialState);
  const actionKeys = Object.keys(weatherActions);
  const actions = actionKeys.reduce((acc, current) => {
    return { ...acc, [current]: weatherActions[current](dispatch, state) };
  }, {});
  const value = {
    ...state,
    ...actions,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined)
    throw new Error("useWeather must be used within WeatherContext");

  return context;
};

export default useWeatherContext;
