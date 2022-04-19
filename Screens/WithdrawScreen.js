//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import { withdraw } from "../redux/action";
import Toast from 'react-native-root-toast';
 

// create a component
const WithdrawScreen = ({ navigation, account, withdraw }) => { 

  const [withdrawalAmount, setWithdrawalAmount] = useState('');

    const withdrawMoney = () =>{
      // console.log(account); 
      let amount = account.wallet - Number(withdrawalAmount);
      // let report = { 
      //   message: `You have withdrawn Gh¢ ${(Number(withdrawalAmount)).toFixed(2)} from your account`,
      //   date: `${new Date().toLocaleString('default', {weekday: "long"})}, ${new Date().toLocaleString('default', {month: "long"})} ${new Date().getDate()}, ${new Date().getFullYear()} - ${new Date().toLocaleString().split(" ")[1].slice(0,-3)}`,
      //   key: Math.random().toString(),
      //   time: new Date().getTime().toString(),
      // };
      let newBalance = {...account, wallet: amount };
      withdraw(newBalance);
      // console.log("new balance:",newBalance);
      Toast.show('Money withdrawn successfully', {
        duration: Toast.durations.SHORT,
       });
       setWithdrawalAmount('');
    }

    // You edited here  ^^^^^^^^
  
    const cancelWithdrawal = () =>{
      Toast.show('Withdrawal cancelled', {
        duration: Toast.durations.SHORT,
       });
       setWithdrawalAmount('');
    }
  
    const allowWithdrawal = () => {
          if(!Number(withdrawalAmount) || Number(withdrawalAmount) < 1 ){
              Toast.show('Amount entered is below Gh¢ 1.00', {
               duration: Toast.durations.SHORT,
              });
              setWithdrawalAmount('');
          }else if(Number(withdrawalAmount) > account.wallet){
              Toast.show('Amount entered exceeds amount in wallet', {
              duration: Toast.durations.SHORT, });
              setWithdrawalAmount('');
          }else {
              Alert.alert("Withdraw",`Make withdrawal of Gh¢ ${withdrawalAmount} to ${account.phoneNumber}?`, [
              {
                text: "Cancel",
                onPress: cancelWithdrawal,
                style: "cancel",
              },
              {
                text: "OK",
                onPress: withdrawMoney,
              },
            ]);
          }
    }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back"
          size={30}
        />
        <Text style={styles.headerTitle}>Withdraw Money</Text>
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
        <TextInput
          style={styles.amountInput}
          keyboardType="numbers-and-punctuation"
          value={withdrawalAmount}
          onChangeText={(text)=> setWithdrawalAmount(text)}
        />
      </View>

      <View style={styles.submitBtnView}>
        <TouchableOpacity style={styles.submitBtn} onPress={allowWithdrawal} >
          <Text style={{ fontSize: 25, fontWeight: "600", color: "white" }}>
            Withdraw
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
    fontWeight: "700",
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

const mapStateToProps = (state) => {
  return { account: state.loggedInAccount[0] }
} 

const mapDispatchToProps = { withdraw }

//make this component available to the app
export default connect(mapStateToProps,mapDispatchToProps)(WithdrawScreen);
