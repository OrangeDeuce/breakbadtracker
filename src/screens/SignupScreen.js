import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/authForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Spacer>
        <AuthForm
          headerText="Sign Up for Tracker"
          errorMessage={state.errorMessage}
          onSubmit={({ email, password }) => signup({ email, password })}
          submitButtonText="Sign Up"
        />
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.link}>
            Already have an account? Sign in instead.
          </Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

// SignupScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };

SignupScreen.navigationOptions = {
  headerShown: false,
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
  errorMessage: {
    fontSize: 20,
    color: "red",
    marginLeft: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  link: {
    color: "blue",
  },
});

export default SignupScreen;
