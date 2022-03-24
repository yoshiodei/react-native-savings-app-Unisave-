//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

// create a component
const StandardLoan = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back"
          size={30}
        />
        <Text style={styles.headerTitle}>Standard Loan</Text>
        <View></View>
      </View>

      <View style={styles.amountView}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "600",
            marginLeft: 30,
            marginBottom: 5,
            color: "grey",
          }}
        >
          Ghc
        </Text>
        <TextInput style={styles.amountInput} keyboardType="numeric" />
      </View>

      <View style={styles.submitBtnView}>
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={{ fontSize: 25, fontWeight: "500", color: "white" }}>
            Request
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
    backgroundColor: "#D1D5EE",
  },
  headerView: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  amountView: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  amountInput: {
    fontSize: 50,
    fontWeight: "600",
    color: "#5A01D3",
    textAlign: "center",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    borderBottomColor: "#5A01D3",
    borderBottomWidth: 1,
  },
  submitBtn: {
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
export default StandardLoan;
