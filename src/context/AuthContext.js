import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return ({ email, password }) => {
    // first to make api request to sign up with that email and password
    // if goes thru n signs up, to then modify our state and say that we are authenticated
    // and if signing up fails, need to reflect and error msg somewher
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
  { isSignedIn: false }
);
