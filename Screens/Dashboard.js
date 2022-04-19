//import liraries
import React, { Component, useState, useEffect } from "react";
import { SimpleLineIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
// import CircularProgress from 'react-native-circular-progress-indicator';
import { connect } from 'react-redux';
import { addInterest, resetTimer, resetLoanTimer, addLoan } from "../redux/action";
import LoanMeter from "./LoanMeter";
// create a component
const Dashboard = ({account, addInterest, resetTimer, resetLoanTimer, addLoan}) => {

  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;

  // interest time (2592000000 = 30days)
  let interestTime = "2592000000";

  // loan time (864000000 = 10days)
  // let loanTime = "864000000";
  
  //interest & interest rate
  let RATE = 5/100;
  let interest = account.wallet * (RATE);
  let debt = account.debt * (RATE);
  
  const startTimer = () => {
    const countDownDate = account.nextInterestIncTime;

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer
        let increment = account.wallet + interest;
        addInterest({...account, wallet: increment});

        if(account.wallet === 0)
          clearInterval(interval.current);
        else{
          let timeCalc = parseInt(interestTime) + parseInt(now);
          resetTimer({...account, nextInterestIncTime: timeCalc.toString()});
        }
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  })

 

 



  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
          <Text style={styles.headerText}>Dashboard</Text>
      </View>  
      <View style={styles.interestView}>
          <View style={styles.interestBox}>
            <View style={styles.interestInnerBox}>
                <SimpleLineIcons name="wallet" size={60} color="black" />
                <Text style={{
                  fontSize: 19,
                  fontWeight: "700",
                  color: "#7b7fd5",
                  marginBottom: 4,
                  marginTop: 10,
                }}>{`${timerDays}days ${timerHours}hrs ${timerMinutes}mins ${timerSeconds}sec`}</Text>
                <Text style={{color: "gray",marginBottom: 10,}}>until next interest increment</Text>
                <Text style={{
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "700",
                  color: "#7b7fd5",
              }}>Gh¢ {interest.toFixed(2)}</Text>
            </View>
          </View>
      </View>
      <LoanMeter /> 
    </SafeAreaView>
  ); 
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#D1D5EE",
    paddingHorizontal: 20,
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
  interestView: {
    height: 320,
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  interestBox: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BAC1EE",
    borderRadius: 10,
  }, 
  interestInnerBox:{
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 10,
    borderColor: "white",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  loantView : {
    height: 100,
    width: "100%",
    paddingHorizontal: 20,
  },
  loanBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "#BAC1EE",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 9,
  },
  loanImgBox: {
    height: 85,
    width: 85,
    backgroundColor: "white",
    borderRadius:8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  loanInfoBox:{
    // backgroundColor: "pink",
    flex: 1,
    height: "100%",
    alignSelf: "flex-start",
    justifyContent: "space-between",
  },
  loanMeterBar: {
    width: "90%",
    height: 14,
    borderRadius: 50,
    backgroundColor: "white",
  },
});

const mapStateToProps = (state) => {
  return { account: state.loggedInAccount[0] }
}

const mapDispatchToProps = { addInterest, resetTimer }

// //make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);



