import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React, { Component, useState, useEffect } from "react";
import { connect } from "react-redux";
import { addLoan, resetLoanTimer } from "../redux/action"; 



const LoanMeter = ({account, addLoan, resetLoanTimer}) => {


    const [timerDays, setTimerDays] = useState();
    const [timerHours, setTimerHours] = useState();
    const [timerMinutes, setTimerMinutes] = useState();
    const [timerSeconds, setTimerSeconds] = useState();
  
    let loanInterval;
  
    // loan time (864000000 = 10days)
    const loanCountDownDate = account.nextLoanIncTime;
    const nowTime = new Date().getTime();
    const remainder = loanCountDownDate - nowTime;
    let loanTime = "864000000";
    let timeRemaining = (remainder/loanTime) * 100;
    
    //interest & interest rate
    let RATE = 5/100;
    let debt = account.debt * (RATE);
    
    const startTimer = () => {
      const countDownDate = account.nextLoanIncTime;
  
      loanInterval = setInterval(() => {
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
          let increment = account.debt + debt;
          addLoan({...account, debt: increment});
  
          if(account.debt === 0)
            clearInterval(loanInterval.current);
          else{
            clearInterval(loanInterval.current);
            let timeCalc = parseInt(loanTime) + parseInt(now);
            resetLoanTimer({...account, nextLoanIncTime: timeCalc.toString()});
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
  

 
  return( 
    <View style={styles.loantView}>
          <View style={styles.loanBox}>
            <View style={styles.loanImgBox}>
                <Image source={require("./../assets/loan.png")} style={{ height: "60%", width: "60%", opacity: 0.9 }} />
            </View>
            <View style={styles.loanInfoBox}>
                <View>
                <Text style={{
                  fontSize: 18,
                  fontWeight: "600",
                  color: "#7b7fd5",
                  marginBottom: 2,
                }}>{timerDays}days {timerHours}hrs {timerMinutes}min {timerSeconds}sec </Text>
                <Text style={{
                  color: "gray",
           
                }}
                >until next loan increment</Text>
                </View>
                <View style={styles.loanMeterBar}>
                    <View style={{width: `${100-timeRemaining}%`, height: "100%", backgroundColor:"tomato", borderRadius: 50}}></View>
                </View>
            </View>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
   
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

  const mapDispatchToProps = { addLoan, resetLoanTimer }

  export default connect(mapStateToProps, mapDispatchToProps)(LoanMeter)