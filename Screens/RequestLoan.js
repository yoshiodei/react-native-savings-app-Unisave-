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
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

// create a component
const RequestLoan = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back"
          size={30}
        />
        <Text style={styles.headerTitle}>Request Loan</Text>
        <View></View>
      </View>

      <View>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "600",
            textAlign: "center",
            margin: 10,
          }}
        >
          Loan Options
        </Text>

        <View style={styles.listView}>
          <TouchableOpacity onPress={() => navigation.navigate("Intermediate")}>
            <View style={styles.list}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  Intermediate Loan
                </Text>
                <MaterialIcons name="verified" size={25} color="#17A703" />
              </View>
              <Text style={{ fontSize: 15, marginTop: 5 }}>
                With this option, You are eligible to loan from Ghc 10 - Ghc 100
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Standard")}>
            <View style={styles.list}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  Standard Loan
                </Text>
                <MaterialIcons name="verified" size={25} color="#17A703" />
              </View>

              <Text style={{ fontSize: 15, marginTop: 5 }}>
                With this option, You are eligible to loan from Ghc 100 - Ghc
                500
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Premium")}>
            <View style={styles.list}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ fontSize: 20, fontWeight: "600" }}>
                  Premium Loan
                </Text>
                <FontAwesome name="ban" size={24} color="red" />
              </View>
              <Text style={{ fontSize: 15, marginTop: 5 }}>
                This Option requires further assessment of your ability to
                payback loan inorder to grant you permission for the loan
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D1D5EE",
  },
  headerView: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  pinView: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  listView: {
    height: "100%",
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  depositBtn: {
    fontSize: 15,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
  list: {
    backgroundColor: "#BAC1EE",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
});

//make this component available to the app
export default RequestLoan;
