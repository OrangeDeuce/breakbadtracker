import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        onSubmit={({ email, password }) => signup({ email, password })}
        submitButtonText="Sign Up"
      />
      <NavLink
        routeName="Signin"
        text="Already have an account?  Sign in instead."
      />
    </View>
  );
};

// SignupScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    //borderColor: "red",
    //borderWidth: 30,
    padding: 20,
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});

export default SignupScreen;
