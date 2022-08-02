import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    // first to make api request to sign up with that email and password
    // if goes thru n signs up, to then modify our state and say that we are authenticated
    // and if signing up fails, need to reflect and error msg somewhere
    try {
      const response = await trackerApi.post("/signup", { email, password });
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
      dispatch({
        type: "add_error",
        payload: "Something went wrong with sign up...",
      });
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    // first to make api request to sign IN with that email and password
    // if goes thru n signs IN, to then modify our state and say that we are authenticated
    // and if signing IN fails, need to reflect and error msg somewher
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
  { signin, signout, signup },
  { isSignedIn: false, errorMessage: "" }
);
