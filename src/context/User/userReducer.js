import { useReducer } from "react";
import initialState from "./userInitialState.js";
import {
  GET_NEW_TOKEN,
  GET_TOKEN,
  GET_USER_ID,
  GET_USER_INFORMATION,
  LOG_IN,
  LOG_OUT,
} from "./userActionTypes";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_NEW_TOKEN:
      return;
    case GET_TOKEN:
      return;
    case GET_USER_ID:
      return;
    case GET_USER_INFORMATION:
      return;
    case LOG_IN:
      return;
    case LOG_OUT:
      return;
  }
};

export default reducer;
