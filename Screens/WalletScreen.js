//import liraries
import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Modal, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { connect } from 'react-redux';


 
// create a component
const WalletScreen = ({navigation, state}) => {

  const [notification, setNotification] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const [interestInfo, setInterestInfo] = useState(false);
  const [pointsInfo, setPointsInfo] = useState(false);
  const [debtInfo, setDebtInfo] = useState(false);

  const [infoModalData, setInfoModalData] = useState('');
  // let account = state.loggedInAccount[0];

  const account = state.loggedInAccount[0];
  const [firstName] = account.fullName.split(' ');

  Number.prototype.format = function () {
    return this.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
  }; 

  
  

  useEffect(() => {
    if(interestInfo){
      let info = 'The money in your wallet will increase by this amount if you leave it as it is for a specified number of days.';
      setInfoModalData(info);
    }else if(debtInfo){
      let info = 'On display is the amount of debt you are left to pay.';
      setInfoModalData(info);
    } else if(pointsInfo){
      let info = 'This shows the points you have. With these points you may get discouts on items purchased, get more interest rates and request loans.';
      setInfoModalData(info);
    } else {
      setInfoModalData('');
    }

    
  }, [interestInfo,debtInfo,pointsInfo]);
  
  const closeInfoModal = () => {
    setInterestInfo(false);
    setPointsInfo(false);
    setDebtInfo(false);
  }
 
  const goToDeposit = () => {
    navigation.navigate("Deposit Screen");
  }

  const goToSendMoney = () => {
    navigation.navigate("Send Money Screen");
  } 

  let wallet = parseFloat(account.wallet.toFixed(2)); 

  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{`Hi ${firstName}`}</Text>
            <TouchableOpacity style={styles.iconBox} onPress={()=> setNotification(true)} >
                <MaterialCommunityIcons name="bell" size={24} color="#4b51bc" />
            </TouchableOpacity>
        </View> 

        <View style={styles.savingsView}>
          <Text style={{ fontSize: 28, fontWeight: "700", color: "dimgray" }}>Gh¢</Text>
          <Text style={{ fontSize: 60, fontWeight: "700", textAlign: "center",color: "#7b7fd5"  }}>{wallet.format()}</Text>
        </View>
        <View style={styles.depositView}>
          <TouchableOpacity style={styles.depositBtn} onPress={goToDeposit}>
            <Text style={{ color: "white", fontSize: 18, fontWeight: "600" }} >+ Deposit</Text>
          </TouchableOpacity> 
        </View>
        <View style={styles.infoCardView}>
          <View style={styles.cardView}>
            <TouchableOpacity style={styles.cardInfoBtn} onPress={()=> setInterestInfo(true)}>
              <Text style={styles.cardInfoText}>i</Text>
            </TouchableOpacity>
            <Text style={styles.cardViewTopText}>Estimated Interest</Text>
            <Text style={styles.cardViewBottomText}>Gh¢ 865.04</Text>
          </View>
          <View style={styles.cardView}>
            <TouchableOpacity style={styles.cardInfoBtn} onPress={()=> setDebtInfo(true)}>
              <Text style={styles.cardInfoText}>i</Text>
            </TouchableOpacity>
            <Text style={styles.cardViewTopText}>Debt To Pay</Text>
            { account.debt === 0 && <Text style={styles.cardViewBottomText}>You have no debts to pay</Text>}
            { account.debt !== 0 && <Text style={styles.cardViewBottomText}>{`Gh¢ ${account.debt.format()}`}</Text>}
          </View>
          <View style={styles.cardView}>
           <TouchableOpacity style={styles.cardInfoBtn} onPress={()=> setPointsInfo(true)}>
              <Text style={styles.cardInfoText}>i</Text>
            </TouchableOpacity>
            <Text style={styles.cardViewTopText}>Current Points</Text>
            <Text style={styles.cardViewBottomText}>{`${account.points} points`}</Text>
          </View>
        </View> 
        <View style={{width: "100%", paddingHorizontal: 20}}>
          <TouchableOpacity style={styles.sendMoneyBtn} onPress={goToSendMoney}>
            <Text style={styles.sendMoneyText}>Send Money</Text>
          </TouchableOpacity>
        </View> 

        {/* ------ Modals ------ */}

        <Modal
          visible={notification}
          transparent
          animationType="slide" 
        >
          <SafeAreaView style={styles.notificationModalView}>
            
            <View style={styles.notificationModalHeader}>
              <Text style={styles.headerText}>Notifications</Text>
            </View>
            <ScrollView style={{width: "100%", flex: 1, backgroundColor: "white"  }} >
                { account.notification.length === 0 && <View style={styles.noNotificationView}>
                  <Image style={styles.noNotification} source={require("./../assets/no_notification.gif")} />
                  <Text style={{ fontSize: 20, fontWeight: "600", color: "gray" }}>Sorry, there are no notifications</Text>
                </View>}
                
                <TouchableOpacity style={{ height: 40, width: "40%",marginHorizontal: "30%", backgroundColor: "#4b51bc", borderRadius: 4, justifyContent: "center", alignItems: "center", marginVertical: 30 }}
              onPress={ ()=> setNotification(false) }
            >
               <Text style={{fontSize: 18, fontWeight: "500", color: "white"}} >Close</Text>
            </TouchableOpacity>
            </ScrollView>
          </SafeAreaView>  
        </Modal>

        <Modal
          visible={ (interestInfo || debtInfo || pointsInfo) ? true : false }
          transparent
          animationType="fade" 
        >
            <View style={styles.infoModalView}>
              <View style={styles.infoBox}>
                  <View style={styles.infoModalIconView}>
                      <Entypo name="info" size={24} color="white" />
                  </View>
                  <View style={styles.modalTextView}>
                    <Text style={{fontSize: 16, textAlign: "center", fontWeight: "400", color: "#292a2a"}}>{infoModalData}</Text>
                  </View>
                  <TouchableOpacity style={{ height: 30, width: "100%", backgroundColor: "#4b51bc", borderRadius: 4, justifyContent: "center", alignItems: "center",  }}
                  onPress={closeInfoModal}
                >
                  <Text style={{fontSize: 18, fontWeight: "500", color: "white"}} >Close</Text>
                </TouchableOpacity>
              </View>

            </View>
        </Modal>

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
    zIndex: 1,
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
 notificationModalView: { 
   flex:1, 
   width: "100%", 
   backgroundColor: "white",  
   justifyContent: "flex-start", 
   alignItems: "center", 
  },

  notificationModalHeader: {
   width: "100%",
   marginTop: 5,
   height: 60,
   backgroundColor: "white",  
   justifyContent: "center",
   alignItems: "center",
   borderBottomColor: "darkgray",
   borderBottomWidth: 1, 
  },
  infoModalView: {
   width: "100%",
   flex: 1,
   backgroundColor: "#000000b3",
   justifyContent: "center",
   alignItems: "center",
  },
  infoBox: {
    width: 300,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 33,
    borderRadius: 8,
    backgroundColor: "white",
    alignItems: "center",
    position: "relative",
  },
  infoModalIconView: {
    width: 60,
    height: 60,
    borderRadius: 50,
    padding: 10,
    paddingLeft: 13,
    backgroundColor: "#4b51bc",
    top: -30,
    left: 120,
    borderWidth: 5,
    justifyContent: "center",
    alignContent: "center",
    borderColor: "white",
    position: "absolute"
  },
  modalTextView: {
    width: "100%",
    minHeight: 20,
    paddingBottom: 10,
  },
  noNotificationView:{
    width: "100%",
    minHeight: 30,
    marginBottom: 20,
    alignItems: "center",
  },
  noNotification:{
    width: "100%",
    height: 300,
  },
});

const mapStateToProps = (state) =>{
  return{
      state
  }
}

// const mapDispatchToProps = { nextPage, prevPage, setPage, updateState, updateOrder }

//make this component available to the app
export default connect(mapStateToProps)(WalletScreen);
