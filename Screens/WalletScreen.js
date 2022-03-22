//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
//import icons
import { MaterialIcons } from "@expo/vector-icons";

// create a component
const WalletScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={{ fontSize: 25, fontWeight: "500", color: "white" }}>
          Bilal's Wallet
        </Text>
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
        <Text
          style={{
            fontSize: 50,
            fontWeight: "700",
            textAlign: "center",
            color: "#5A01D3",
          }}
        >
          7,002<Text style={{ fontSize: 30 }}>.00</Text>
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Deposit")}
          style={{
            backgroundColor: "#02C1FE",
            padding: 5,
            width: 150,
            borderRadius: 20,
            marginTop: 15,
            alignSelf: "flex-end",
          }}
        >
          <Text style={styles.depositBtn}>+ Make Deposit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listView}>
        <View style={styles.list}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Estimated Interest
            </Text>
            <MaterialIcons name="info" size={25} color="white" />
          </View>
          <Text style={{ fontSize: 18, marginTop: 5 }}>Ghc 865.04</Text>
        </View>
        <View style={styles.list}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>Dept To Pay</Text>
            <MaterialIcons name="info" size={25} color="white" />
          </View>
          <Text style={{ fontSize: 18, marginTop: 5 }}>
            You have no depts to pay
          </Text>
        </View>
        <View style={styles.list}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              Current Points
            </Text>
            <MaterialIcons name="info" size={25} color="white" />
          </View>
          <Text style={{ fontSize: 18, marginTop: 5 }}>50 pts</Text>
        </View>
      </View>
      <View styles={styles.sendBtnView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("SendMoney")}
          style={styles.sendBtn}
        >
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
    paddingHorizontal: 20,
  },
  headerView: {
    height: "10%",
    backgroundColor: "#5A01D3",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  amountView: {
    height: "25%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  listView: {
    height: "50%",
    paddingHorizontal: 20,
  },
  depositBtn: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
  list: {
    backgroundColor: "#D3B3FF",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  sendBtn: {
    backgroundColor: "#5A01D3",
    padding: 10,
    width: "88%",
    alignItems: "center",
    marginHorizontal: 20,
    borderRadius: 50,
    marginTop: 15,
  },
});

//make this component available to the app
export default WalletScreen;
