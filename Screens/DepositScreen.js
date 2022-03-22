//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { ScrollView, TextInput,  } from "react-native-gesture-handler";
import { Entypo } from '@expo/vector-icons';

// create a component
const DepositScreen = ({navigation}) => {

    const goBack = () => {
        navigation.goBack();
    }

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.headerView}>
                <TouchableOpacity style={styles.goBackBtn} onPress={goBack} >
                     <Entypo name="chevron-left" size={30} color="#4b51bc" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Deposit</Text>
      </View>
      
      <View style={styles.depositAmountView}>
          <Text style={{ fontSize: 28, fontWeight: "700", color: "dimgray" }}>Gh¢</Text>
          <TextInput style={ styles.depositInput } keyboardType="numbers-and-punctuation" />
      </View>

      <View style={{width: "100%", paddingHorizontal: 20, flex: 1, justifyContent: "flex-end", }}>
          <TouchableOpacity style={styles.depositBtn} >
            <Text style={styles.depositText}>Deposit</Text>
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
  depositAmountView: {
    // backgroundColor: "pink",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  depositInput: {
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
  },
  depositBtn: {
    backgroundColor: "#4b51bc",
    height: 50,
    width: "100%",
    borderRadius: 50,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
},
depositText: {
    color: "white",
    fontSize: 22,
    fontWeight: "500",
  },
});

//make this component available to the app
export default DepositScreen;
