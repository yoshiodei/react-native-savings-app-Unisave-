//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';

// create a component
const WalletScreen = ({navigation}) => {

  const goToDeposit = () => {
    navigation.navigate("Deposit Screen");
  }

  const goToSendMoney = () => {
    navigation.navigate("Send Money Screen");
  } 

  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.headerView}>
            <Text style={styles.headerText}>Wallet</Text>
            <TouchableOpacity style={styles.iconBox}>
                     {/* <Entypo name="shopping-cart" size={24} color="#4b51bc" /> */}
                     <MaterialCommunityIcons name="bell" size={24} color="#4b51bc" />
            </TouchableOpacity>
            
        </View> 
        <View style={styles.savingsView}>
          <Text style={{ fontSize: 28, fontWeight: "700", color: "dimgray" }}>Gh¢</Text>
          <Text style={{ fontSize: 60, fontWeight: "700", textAlign: "center",color: "#7b7fd5"  }}>7,308.50</Text>
        </View>
        <View style={styles.depositView}>
          <TouchableOpacity style={styles.depositBtn} onPress={goToDeposit}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }} >+ Deposit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoCardView}>
          <View style={styles.cardView}>
            <TouchableOpacity style={styles.cardInfoBtn}>
              <Text style={styles.cardInfoText}>i</Text>
            </TouchableOpacity>
            <Text style={styles.cardViewTopText}>Estimated Interest</Text>
            <Text style={styles.cardViewBottomText}>Gh¢ 865.04</Text>
          </View>
          <View style={styles.cardView}>
            <TouchableOpacity style={styles.cardInfoBtn}>
              <Text style={styles.cardInfoText}>i</Text>
            </TouchableOpacity>
            <Text style={styles.cardViewTopText}>Debt To Pay</Text>
            <Text style={styles.cardViewBottomText}>You have no debts to pay</Text>
          </View>
          <View style={styles.cardView}>
           <TouchableOpacity style={styles.cardInfoBtn}>
              <Text style={styles.cardInfoText}>i</Text>
            </TouchableOpacity>
            <Text style={styles.cardViewTopText}>Current Points</Text>
            <Text style={styles.cardViewBottomText}>50 points</Text>
          </View>
        </View> 
        <View style={{width: "100%", paddingHorizontal: 20}}>
          <TouchableOpacity style={styles.sendMoneyBtn} onPress={goToSendMoney}>
            <Text style={styles.sendMoneyText}>Send Money</Text>
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
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3E3E3E"
  },
  savingsView: {
    // backgroundColor: "pink",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  depositBtn: {
    backgroundColor: "#1dd621",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    borderRadius: 50,
  },
  depositView: {
    height: 30,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  infoCardView: {
    flex: 1,
    width: "100%",
    // backgroundColor: "pink",
    marginTop: 15,
    paddingHorizontal: 20,
  },
  cardView: {
    borderRadius: 8,
    backgroundColor: "#BAC1EE",
    width: "100%",
    height: 70,
    marginBottom: 10,
    padding: 8,
    position: "relative",
  },
  cardInfoBtn:{
    width: 17,
    height: 17,
    position: "absolute",
    top: 8,
    right: 8,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  cardInfoText: {
    fontSize: 12,
    fontWeight: "700",
    color: "dimgray",
  },
  sendMoneyBtn: {
    backgroundColor: "#4b51bc",
    height: 50,
    width: "100%",
    borderRadius: 50,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
},
  sendMoneyText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
  cardViewBottomText:{
    fontSize: 18,
    fontWeight: "500",
    color: "white",
  },
  cardViewTopText:{
    marginBottom: 2,
    color: "#7b7fd5",
    fontSize: 20,
    fontWeight: "700",
  },
  iconBox: {
    height: 30,
    width: 30,
    borderRadius: 4,
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    right: 20,
    top: 15,
 },
});

//make this component available to the app
export default WalletScreen;
