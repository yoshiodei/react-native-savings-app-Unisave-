//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";

// create a component
const SetPinScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="white"
        />
        <Text style={styles.headerTitle}>Set PIN</Text>
        <View></View>
      </View>

      <View style={styles.pinView}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600", marginVertical: 5 }}>
            Please enter your 4 digit to set PIN
          </Text>
          <Text style={{ fontSize: 12, color: "#636363" }}>
            The PIN would be used to grant you access to withdraw ans send money
            to other users
          </Text>
        </View>

        <View style={{ alignItems: "center", marginTop: 40 }}>
          <SmoothPinCodeInput
            // mask="*"
            //placeholder="•"
            cellSize={50}
            cellSpacing={15}
            cellStyle={{
              borderWidth: 2,
              borderRadius: 8,
              borderColor: "mediumturquoise",
              backgroundColor: "azure",
            }}
            cellStyleFocused={{
              borderColor: "lightseagreen",
              backgroundColor: "lightcyan",
            }}
            textStyle={{
              fontSize: 25,
              color: "blue",
            }}
            textStyleFocused={{
              color: "crimson",
            }}
            maskDelay={1000}
            password={true}
            restrictToNumbers={true}
            //value={code}
            //onTextChange={(code) => this.setState({ code })}
          />
        </View>
      </View>

      <View style={styles.pinBtnView}>
        <TouchableOpacity style={styles.pinBtn}>
          <Text style={{ fontSize: 25, fontWeight: "600", color: "white" }}>
            Set Pin
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
  pinView: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  pinBtn: {
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
export default SetPinScreen;
