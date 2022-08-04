import AsyncStorage from "@react-native-async-storage/async-storage";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: "", token: action.payload };
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: "clear_error_message" });
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // first to make api request to sign up with that email and password
    // if goes thru n signs up, to then modify our state and say that we are authenticated
    // and if signing up fails, need to reflect and error msg somewhere
    try {
      const response = await trackerApi.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signup", payload: response.data.token });
      navigate("mainFlow");
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with Sign Up...",
      });
    }
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    // first to make api request to sign IN with that email and password
    // if goes thru n signs IN, to then modify our state and say that we are authenticated
    // and if signing IN fails, need to reflect and error msg somewher
    try {
      const response = await trackerApi.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
      navigate("mainFlow");
    } catch (error) {
      dispatch({
        type: "add_error",
        payload: "Something went wrong with Sign In..",
      });
    }
  };
};

const signout = (dispatch) => {
  return ({ email, password }) => {
    // first to make api request to sign OUT with that email and password
    // if goes thru n signs OUT, to then modify our state and say that we are authenticated
    // and if signing OUT fails, need to reflect and error msg somewher
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signout, signup, clearErrorMessage },
  { token: null, errorMessage: "" }
);
