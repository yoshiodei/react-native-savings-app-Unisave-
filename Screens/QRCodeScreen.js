//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { QRCode } from "react-native-custom-qr-codes-expo";
import {v4 as uuid} from 'uuid';
import 'react-native-get-random-values';
import { connect } from "react-redux";
 
// create a component
const QRCodeScreen = ({ navigation, account }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back"
          size={30}
          color="black"
        />
        <Text style={styles.headerTitle}>My QR Code</Text>
        <View></View>
      </View>

      <View style={styles.qrcodeView}>
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#BAC1EE",
            padding: 40,
            borderRadius: 10,
          }} 
        >
          <Text style={{ fontSize: 15, marginBottom: 10 }}>
            Scan code to transfer money
          </Text>
          <View 
              style={{
                alignItems: "center",
                backgroundColor: "white",
                padding:8,
                borderRadius: 7,
              }}
          >
            <QRCode content={account.QRCode} />
          </View>
          
        </View>
      </View>

      <View style={styles.profileView}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#BAC1EE",
            padding: 10,
            borderRadius: 10,
          }}
        >
          <View>
            <Image
              style={styles.profileImg}
              source={{
                uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
              }}
            />
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}>
              Transaction Code
            </Text>
            <Text style={{ fontSize: 16, color: "#616161" }}>
              {account.QRCode}
            </Text>
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
    backgroundColor: "#D1D5EE",
  },
  headerView: {
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  qrcodeView: {
    height: "60%",
    alignItems: "center",
    justifyContent: "center",
  },
  profileView: {
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  profileImg: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 20,
  },
});

const mapStateToProps = (state) => {
  return {account: state.loggedInAccount[0]}
}

//make this component available to the app
export default connect(mapStateToProps)(QRCodeScreen);
