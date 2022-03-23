//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import Slider from "react-native-slide-to-unlock";

// create a component
const AccountScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={{ fontSize: 25, fontWeight: "500", color: "white" }}>
          My Account
        </Text>
      </View>

      <View style={styles.profileView}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#D3B3FF",
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
              Yoshi Odei
            </Text>
            <Text style={{ fontSize: 18, color: "#616161" }}>
              yoshiodei@yahoo.com
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.accountLists}>
        <TouchableOpacity onPress={() => navigation.navigate("QRCode")}>
          <View style={styles.accountList}>
            <Ionicons name="ios-qr-code-outline" size={30} color="slateblue" />
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
              QR Code
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Transactions")}>
          <View style={styles.accountList}>
            <FontAwesome name="history" size={30} color="slateblue" />
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
              Transaction History
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("EditPassword")}>
          <View style={styles.accountList}>
            <MaterialIcons name="security" size={30} color="slateblue" />
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
              Edit Password
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SetPin")}>
          <View style={styles.accountList}>
            <AntDesign name="pushpin" size={30} color="slateblue" />
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
              Set PIN
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Withdraw")}>
          <View style={styles.accountList}>
            <MaterialIcons name="attach-money" size={30} color="slateblue" />
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
              Withdraw Money
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("RequestLoan")}>
          <View style={styles.accountList}>
            <MaterialCommunityIcons name="bank" size={30} color="slateblue" />
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
              Request Loan
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.signOutView}>
        <Slider
          childrenContainer={{}}
          onEndReached={() => {
            Alert.alert("Sign Out", "Are you sure you want to sign out?", [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              {
                text: "OK",
                onPress: () => navigation.navigate("Signinscreen"),
              },
            ]);
          }}
          containerStyle={{
            backgroundColor: "#D3B3FF",
            borderRadius: 10,
            overflow: "hidden",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
          sliderElement={
            <Image
              style={{
                width: 70,
                borderRadius: 5,
                height: 40,
              }}
              source={{
                uri: "https://icon-library.com/images/slide-icon/slide-icon-13.jpg",
              }}
            />
          }
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "600",
              color: "red",
            }}
          >
            {"Slide To SignOut"}
          </Text>
        </Slider>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerView: {
    height: "10%",
    backgroundColor: "#5A01D3",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  profileView: {
    padding: 20,
  },
  signOutView: {
    paddingHorizontal: 20,
    height: "15%",
    justifyContent: "flex-end",
  },
  accountLists: {
    paddingHorizontal: 20,
  },
  profileImg: {
    height: 70,
    width: 70,
    borderRadius: 10,
    marginRight: 20,
  },
  accountList: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "silver",
    borderBottomWidth: 1,
  },
});

//make this component available to the app
export default AccountScreen;
