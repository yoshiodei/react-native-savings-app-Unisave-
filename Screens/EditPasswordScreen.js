//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// create a component
const EditPasswordScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="white"
        />
        <Text style={styles.headerTitle}>Reset Password</Text>
        <View></View>
      </View>

      <View style={styles.passwordView}>
        <View style={styles.password}>
          <Text style={styles.passwordTitle}>Old Password</Text>
          <TextInput
            style={styles.passwordInput}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
          />
        </View>
        <View style={styles.password}>
          <Text style={styles.passwordTitle}>New Password</Text>
          <TextInput
            style={styles.passwordInput}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
          />
        </View>
        <View style={styles.password}>
          <Text style={styles.passwordTitle}>Confirm New Password</Text>
          <TextInput
            style={styles.passwordInput}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
          />
        </View>
      </View>

      <View style={styles.resetBtnView}>
        <TouchableOpacity style={styles.resetBtn}>
          <Text style={{ fontSize: 25, fontWeight: "600", color: "white" }}>
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: "10%",
    flexDirection: "row",
    backgroundColor: "#5A01D3",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  passwordView: {
    padding: 20,
  },
  resetBtnView: {
    height: "40%",
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  password: {
    marginVertical: 5,
  },
  passwordTitle: {
    fontSize: 18,
    fontWeight: "500",
    margin: 5,
  },
  passwordInput: {
    fontSize: 20,
    padding: 10,
    width: "100%",
    backgroundColor: "#C6E3F6",
    borderRadius: 5,
  },
  resetBtn: {
    backgroundColor: "#5A01D3",
    padding: 10,
    width: "88%",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 50,
    marginTop: 25,
  },
});

//make this component available to the app
export default EditPasswordScreen;
