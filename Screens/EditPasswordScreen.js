//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import Toast from 'react-native-root-toast';
import { resetPassword } from "../redux/action";
  
// create a component
const EditPasswordScreen = ({ navigation, account, resetPassword }) => {
 
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  const passwordReset = () => {
       if( !newPassword || !confirmPassword || !oldPassword ){
        Toast.show('Please fill fields completely', {
          duration: Toast.durations.SHORT,
         }); 
       }else if(newPassword.lenght < 8){
          Toast.show('Password is too short', {
          duration: Toast.durations.SHORT,
         });
         setNewPassword('');
         setConfirmPassword('');
       }
        else if( oldPassword !== account.password){
         Toast.show('Old password did not match', {
          duration: Toast.durations.SHORT,
         });
         setOldPassword('');
       }else if( confirmPassword !== newPassword){
         Toast.show('New passwords do not match', {
          duration: Toast.durations.SHORT,
         });
         setNewPassword('');
         setConfirmPassword('');
       }else{
         Toast.show('Password set successfully', {
          duration: Toast.durations.SHORT,
         });
         resetPassword({...account, password: newPassword })
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
        <Text style={styles.headerTitle}>Reset Password </Text>
        <View></View>
      </View>

      <View style={styles.passwordView}>
        <View style={styles.password}>
          <Text style={styles.passwordTitle}>Old Password</Text>
          <TextInput
            style={styles.passwordInput}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            value={oldPassword}
            onChangeText={(text)=>setOldPassword(text)}
          />
        </View>
        <View style={styles.password}>
          <Text style={styles.passwordTitle}>New Password</Text>
          <TextInput
            style={styles.passwordInput}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            value={newPassword}
            onChangeText={(text)=>setNewPassword(text)}
          />
        </View>
        <View style={styles.password}>
          <Text style={styles.passwordTitle}>Confirm New Password</Text>
          <TextInput
            style={styles.passwordInput}
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            value={confirmPassword}
            onChangeText={(text)=>setConfirmPassword(text)}
          />
        </View>
      </View>

      <View style={styles.resetBtnView}>
        <TouchableOpacity style={styles.resetBtn} onPress={passwordReset}>
          <Text style={{ fontSize: 25, fontWeight: "600", color: "white" }}>
            Reset Password
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
  passwordView: {
    padding: 20,
  },
  resetBtnView: {
    height: "40%",
    justifyContent: "flex-end",
    paddingBottom: 50,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  password: {
    marginVertical: 5,
  },
  passwordTitle: {
    fontSize: 18,
    fontWeight: "500",
    margin: 5,
  },
  passwordInput: {
    fontSize: 20,
    padding: 10,
    width: "100%",
    backgroundColor: "#F6F6F6",
    borderRadius: 5,
  },
  resetBtn: {
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

const mapDispatchToProps = { resetPassword }

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(EditPasswordScreen);
