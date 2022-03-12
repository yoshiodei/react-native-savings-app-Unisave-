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
const SendMoneyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back"
          size={30}
          color="white"
        />
        <Text style={styles.headerTitle}>Send Money</Text>
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

      <View styles={styles.receipientView}>
        <Text style={{ marginBottom: 5, color: "grey", marginLeft: 20 }}>
          Reciepient Code / Phone Number
        </Text>
        <TextInput style={styles.receipientInput} />
        <TouchableOpacity style={styles.scanCodeBtn}>
          <Text style={{ fontSize: 25, color: "white", textAlign: "center" }}>
            Scan Code
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.sendBtnView}>
        <TouchableOpacity style={styles.sendBtn}>
          <Text style={{ fontSize: 25, fontWeight: "600", color: "white" }}>
            Send Money
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
    marginVertical: 20,
    paddingHorizontal: 20,
  },
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
  receipientInput: {
    fontSize: 20,
    width: "90%",
    backgroundColor: "#D0E8F0",
    borderRadius: 5,
    padding: 10,
    marginLeft: 20,
  },
  scanCodeBtn: {
    backgroundColor: "#02C1FE",
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 20,
  },
  sendBtn: {
    backgroundColor: "#5A01D3",
    padding: 10,
    width: "88%",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 50,
    marginTop: "25%",
  },
});

//make this component available to the app
export default SendMoneyScreen;
