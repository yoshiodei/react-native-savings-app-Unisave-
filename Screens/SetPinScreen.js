//import liraries
import React, { Component, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import SmoothPinCodeInput from "react-native-smooth-pincode-input";
import { TextInput } from "react-native-gesture-handler";
import Toast from 'react-native-root-toast';
import { connect } from "react-redux";
import { resetPin } from "./../redux/action";

// create a component
const SetPinScreen = ({ navigation, account, resetPin }) => {

  const [newPin, setNewPin] = useState('');

  const setPin = () => {
      if(newPin.length !== 4 || !Number(newPin)){
        Toast.show('PIN must be 4 digits!', {
          duration: Toast.durations.LONG,
         });
      }else{
        let newlySetPIN = {...account, PIN: newPin};
        resetPin(newlySetPIN);
        Toast.show('PIN has been set successfully', {
        duration: Toast.durations.LONG,
      });
  }}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back"
          size={30}
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

        <View style={{ alignItems: "center", paddingTop: 20,position: "relative", }}>
          <TextInput
            style={styles.setPinInput}
            secureTextEntry={true}
            value={newPin}
            onChangeText={ (text)=> setNewPin(text) }
            maxLength={4}
            // keyboardType="numeric"
            caretHidden={true}
          />
          <View style={[styles.pinInputView, {left: 76}]}></View>
          <View style={[styles.pinInputView, {left: 121}]}></View>
          <View style={[styles.pinInputView, {left: 167}]}></View>
          <View style={[styles.pinInputView, {left: 212}]}></View>
          {/* <SmoothPinCodeInput
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
          /> */}
        </View>
      </View>

      <View style={styles.pinBtnView}>
        <TouchableOpacity style={styles.pinBtn} onPress={setPin}>
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
  setPinInput: {
    fontSize: 25,
    padding: 10,
    letterSpacing: 30,
    marginLeft: 20,
    textAlign: "left",
    backgroundColor: "transparent",
    borderColor: "#5A01D3",
    // borderWidth: 1,
    width: "60%",
    borderRadius: 5,
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
  pinInputView: {
    height: "90%", 
    width: 35, 
    borderRadius: 5, 
    backgroundColor: "white", 
    position:"absolute", 
    top: 23,  
    zIndex: -1,
    borderWidth: 1,
    borderColor: "dimgray",
  }
  
});

const mapStateToProps = (state) => {
  return { account: state.loggedInAccount[0] }
}

const mapDispatchToProps = { resetPin }

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SetPinScreen);
