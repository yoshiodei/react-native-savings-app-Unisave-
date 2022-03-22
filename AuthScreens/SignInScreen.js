//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// create a component
const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Image style={styles.logo} source={require("../assets/unisave.png")} />
      </View>

      <View style={styles.formView}>
        <View style={styles.formInput}>
          <Text style={styles.formLabel}>Email / Phone Number</Text>
          <TextInput autoCapitalize="none" style={styles.input} />
        </View>

        <View style={styles.formInput}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            textContentType="password"
            style={styles.input}
          />
        </View>
      </View>

      <View style={styles.submitBtnView}>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{ fontSize: 25, fontWeight: "600", color: "white" }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <Text style={{ textAlign: "center", marginTop: 10 }}>
          Already have an account?
          <Text style={{ color: "blue" }}> Sign Up</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoView: {
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 160,
    resizeMode: "contain",
  },
  formView: {
    paddingHorizontal: 20,
  },
  submitBtnView: {
    height: "60%",
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  formInput: {
    marginBottom: 10,
  },
  formLabel: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 3,
  },
  input: {
    fontSize: 15,
    width: "100%",
    padding: 10,
    backgroundColor: "#D5E7FF",
    borderRadius: 5,
  },
  submitBtn: {
    backgroundColor: "#5A01D3",
    padding: 10,
    width: "100%",
    alignItems: "center",
    borderRadius: 50,
    marginTop: 25,
  },
});

//make this component available to the app
export default SignInScreen;
