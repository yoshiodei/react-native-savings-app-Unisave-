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
const DepositScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="white"
        />
        <Text style={styles.headerTitle}>Make Deposit</Text>
        <View></View>
      </View>

      <View style={styles.amountView}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            marginLeft: 30,
            color: "grey",
          }}
        >
          Ghc
        </Text>
        <TextInput
          style={styles.amountInput}
          keyboardType="numeric"
          placeholder="Enter Amount"
        />
      </View>

      <View style={styles.depositBtnView}>
        <TouchableOpacity style={styles.depositBtn}>
          <Text style={{ fontSize: 25, fontWeight: "600", color: "white" }}>
            Deposit
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
  amountView: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  //   depositBtnView: {
  //     height: "70%",
  //     justifyContent: "flex-end",
  //     paddingBottom: 50,
  //   },
  headerTitle: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  amountInput: {
    fontSize: 50,
    fontWeight: "700",
    color: "#5A01D3",
    textAlign: "center",
    padding: 10,
    borderBottomColor: "#5A01D3",
    borderBottomWidth: 1,
  },
  depositBtn: {
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
export default DepositScreen;
