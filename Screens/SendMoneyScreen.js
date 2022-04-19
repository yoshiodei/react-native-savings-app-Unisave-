//import liraries
import React, { Component, useState, useEffect  } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Button } from "react-native";
// import { ScrollView } from "react-native-gesture-handler";
// import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';
import { Entypo } from '@expo/vector-icons';
  

// create a component
const SendMoneyScreen = ({navigation, route, state}) => {

    const goBack = () => {
        navigation.goBack(); 
    } 

    let account = state.loggedInAccount[0];
    let wallet = account.wallet;


    const [moneySent,setMoneySent] = useState('');
    const [recipientData,setRecipientData] = useState('');

    let data = route.params;
    useEffect(()=>{
        data ? setRecipientData(data) : setRecipientData('')
    },[data])
    
    const sendMoney = () => {
       if(!recipientData || !moneySent){
          Toast.show('Please provide inputs', {
            duration: Toast.durations.SHORT,
          });
          setMoneySent('');
          setRecipientData('');
       }else if(!Number(moneySent)){
          Toast.show('Please enter a number in this field', {
            duration: Toast.durations.SHORT,
          });
          setMoneySent('');
       }else if(moneySent > wallet){
          Toast.show('Money sent cannot exceed amount in wallet', {
          duration: Toast.durations.SHORT,
          });
          setMoneySent('');
       }else if(recipientData === account.phoneNumber || recipientData === account.QRCode){
          Toast.show('Incorrect recipient data entered', {
          duration: Toast.durations.SHORT,
          });
          setRecipientData('');
       }else{
         let found = state.accounts.some(account => (account.phoneNumber === recipientData || account.QRCode === recipientData));
         let amount = account.wallet - Number(moneySent);
          // let report = { 
          //   message: `You sent Gh¢ ${(Number(moneySent)).toFixed(2)} to ${found[0].fullName}`,
          //   date: `${new Date().toLocaleString('default', {weekday: "long"})}, ${new Date().toLocaleString('default', {month: "long"})} ${new Date().getDate()}, ${new Date().getFullYear()} - ${new Date().toLocaleString().split(" ")[1].slice(0,-3)}`,
          //   key: Math.random().toString(),
          //   time: new Date().getTime().toString(),
          // };
         let newBalance = {...account, wallet: amount  };
         deposit(newBalance);
         if(found){
          Toast.show('Money sent successfully', {
            duration: Toast.durations.SHORT,
          });
          setMoneySent('');
          setRecipientData('');


         }else{
          Toast.show('Incorrect recipient data entered', {
            duration: Toast.durations.SHORT,
          });
          setRecipientData('');
         }
       }
    }


  // You edited here ^^^^^^^^^^

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.headerView}>
                <TouchableOpacity style={styles.goBackBtn} onPress={goBack} >
                     <Entypo name="chevron-left" size={30} color="#4b51bc" />
                </TouchableOpacity>
                <Text style={styles.headerText}> Send Money </Text>   
      </View>

      <View style={styles.sendAmountView}>
          <Text style={{ fontSize: 28, fontWeight: "700", color: "dimgray" }}>Gh¢</Text>
          <TextInput
            value={moneySent}
            onChangeText={(amount)=> setMoneySent(amount)}
            style={ styles.sendInput } keyboardType="numbers-and-punctuation" />
          
          <Text style={{ fontSize: 16, fontWeight: "500", color: "dimgray", marginBottom: 5, }}>Recipient Code / Phone Number</Text>
          <TextInput style={ styles.codeInput }
             value={recipientData}
             onChangeText={(text)=> setRecipientData(text)}
          />

          <TouchableOpacity style={styles.scanBtn} onPress={()=> navigation.navigate("Scanner Screen") }>
            <Text style={styles.scanBtnText}>Scan Recipient QR Code</Text>
          </TouchableOpacity>

      </View>

      <View style={{width: "100%", paddingHorizontal: 20, flex: 1, justifyContent: "flex-end", }}>
          <TouchableOpacity style={styles.sendBtn} onPress={sendMoney} >
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#D1D5EE",
  },
  headerView: {
    height: 60,
    width: "100%",
    // backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    position: "relative",
  },
  goBackBtn: {
     height: 30,
     width: 30,
     borderRadius: 4,
  //    backgroundColor: "blue",
     position: "absolute",
     left: 10,
     top: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3E3E3E"
  },
  codeInput: {
      borderRadius: 8,
      backgroundColor: "#dee2ee",
      height: 55,
      padding: 10,
      marginBottom: 15,
  },
  sendAmountView: {
    // backgroundColor: "pink",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sendInput: {
    height: 100,
    textAlign: "center",
    color: "#7b7fd5", 
    borderBottomColor: "darkgray",
    borderBottomWidth: 2,
    fontSize: 60,
    backgroundColor: "#dee2ee",
    marginTop: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    marginBottom: 20,
  },

  scanBtn: {
    borderRadius: 8,
    height: 55,
    backgroundColor: "#1dd621",
    justifyContent: "center",
    alignItems: "center",
  },
  sendBtn: {
    backgroundColor: "#4b51bc",
    height: 50,
    width: "100%",
    borderRadius: 50,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
},
sendText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
scanBtnText: {
    fontSize: 18,
    color: "white",
    fontWeight: "600",
},
containerNew: {
  width: "100%",
  height: 80,
  flexDirection: 'column',
  justifyContent: 'center',
},
});

const mapStateToProps = (state) => {
  return { state }
} 

//make this component available to the app
export default connect(mapStateToProps)(SendMoneyScreen);
