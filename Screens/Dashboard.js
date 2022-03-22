//import liraries
import React, { Component } from "react";
import { SimpleLineIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";

// create a component
const Dashboard = () => {
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
                  fontSize: 24,
                  fontWeight: "600",
                  color: "#7b7fd5",
                  marginBottom: 2,
                  marginTop: 7,
                }}>4days 20hrs 18sec</Text>
                <Text style={{color: "gray",marginBottom: 10,}}>until next interest increment</Text>
                <Text style={{
                  color: "gray",
                  fontSize: 25,
                  fontWeight: "700",
                  color: "#7b7fd5",
              }}>Gh¢ 85.00</Text>
            </View>
          </View>
      </View>
      <View style={styles.loantView}>
          <View style={styles.loanBox}>
            <View style={styles.loanImgBox}>
                <Image source={require("./../assets/loan.png")} style={{ height: "60%", width: "60%", opacity: 0.9 }} />
            </View>
            <View style={styles.loanInfoBox}>
                <View>
                <Text style={{
                  fontSize: 24,
                  fontWeight: "600",
                  color: "#7b7fd5",
                  marginBottom: 2,
                }}>2days 4hrs 32sec</Text>
                <Text style={{
                  color: "gray",
          
                }}
                >until next loan increment</Text>
                </View>
                <View style={styles.loanMeterBar}>
                    <View style={{width: "40%", height: "100%", backgroundColor:"tomato", borderRadius: 50}}></View>
                </View>
            </View>
          </View>
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
    width: 280,
    height: 280,
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

//make this component available to the app
export default Dashboard;
