import React, {useState} from 'react';
import {View, StyleSheet,Image, Text, TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-root-toast';
import {connect} from 'react-redux';
 

const Signupscreen = ({navigation}) => {

    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const [data,setData] = useState({
      fullName: "",
      phoneNumber: "",
      email: "",
      studentID: "",
      password: "",
      points: 10,
      wallet: 0.00,
      nextInterestIncTime: "",
      nextInterestIncAmount: "",
      nextLoanIncTime: "",
      nextLoanIncAmount: "",
      notification: [],
      purchaseReceipt: [],
      PIN: 1234,
      QRCode: "",
    }); 
    
    const inputData = (e,name) => {
       setData({...data, [name]: e});
    //    console.log(data);
    }  

//     const signup = () => {
//         if( !data.password || !data.phoneNumber || !data.email || !data.studentID || !data.password || !data.fullName ||!passwordConfirmation ){
//             Toast.show('Please complete form to proceed', { duration: Toast.durations.SHORT,});
//         } else{
//             let match = accounts.filter(account => account.email.toLowerCase() === data.email.toLowerCase())
//             if(match.length === 1){
//                  Toast.show('Email entered already exists', { duration: Toast.durations.SHORT,});
//             }else {
//                 let match = accounts.filter(account => account.phoneNumber === data.phoneNumber );
//                 if(match.length === 1){
//                     Toast.show('Phone number entered already exists', { duration: Toast.durations.SHORT,});
//                }else{
//                 let match = accounts.filter(account => account.studentID === data.studentID );   
//                 if(match.length === 1){
//                     Toast.show('Student ID entered already exists', { duration: Toast.durations.SHORT,});
//                }else{
//                     if( data.password.length < 8 ){
//                         Toast.show('Password entered is too short', { duration: Toast.durations.SHORT,});
//                     }
//                     else if( data.password !== passwordConfirmation ){
//                         Toast.show('Passwords words provided does not match', { duration: Toast.durations.SHORT,});
//                     }else{
//                          let code = Math.random().toString();
//                          let newAccounts = {...accounts, data};
//                          setData({...data, QRCode: code  });
//                          navigation.replace('Mainscreen', {data, newAccounts});
//                     }
 
//                 }  
//                }
//             }
//         }
        
//  }  


    return (
        <SafeAreaView style={styles.container}>
           <KeyboardAwareScrollView style={{width: "100%"}} showsVerticalScrollIndicator="false">
                <View style={styles.imageView}>
                    <Image source={require('./../assets/unisave.png')} style={{width: "80%", height: "180%"}} resizeMode={'stretch'} />
                </View> 
                <View style={styles.inputView}>
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            value={data.fullName}
                            onChangeText={(e)=> inputData(e,"fullName") }
                        />
                    </View>
                    
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                            value={data.email}
                            onChangeText={(e)=> inputData(e,"email") }
                        />
                    </View>
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            value={data.phoneNumber}
                            onChangeText={(e)=> inputData(e,"phoneNumber") }
                        />
                    </View>
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Student ID</Text>
                        <TextInput
                            style={styles.input}
                            value={data.studentID}
                            onChangeText={(e)=> inputData(e,"studentID") }
                        />
                    </View>
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            value={data.password}
                            onChangeText={(e)=> inputData(e,"password") }
                        />
                    </View>
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            value={passwordConfirmation}
                            onChangeText={(text)=> setPasswordConfirmation(text) }
                        />
                    </View>
                </View>
                <View style={{width: "100%", paddingHorizontal: 20}}>
                    <TouchableOpacity style={styles.addToCartBtn} onPress={signup} >
                        <Text style={styles.addToCartText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5} style={{marginBottom: 20}}
                        onPress={()=>navigation.navigate('Signinscreen')}
                    >
                        <Text style={{textAlign: "center", color: "blue", textDecorationLine: "underline", fontSize: 13 }}>Have an account? Click here to SignIn</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView> 
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 2,
        justifyContent: "flex-start",
        alignItems: "stretch",
        backgroundColor: "#D1D5EE",
        paddingHorizontal: 20,
      },
      imageView: {
        height: 150,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",   
        paddingTop: 30,
        marginBottom: 30,   
        // backgroundColor: "hotpink" 
      },
      input:{
        //   backgroundColor: "white",
          height: 40,
          borderColor: "#c3c2c8",
          borderStyle: "solid",
          borderBottomWidth: 1.5,
          paddingLeft: 15
      },
      inputLabel: {
          fontSize: 14,
          marginBottom: 3,
          fontWeight: "800",
          color: "#3e3e3f",
      },
      inputView: {
        flex: 1,
        width: "100%",
        // backgroundColor: "pink",
      },
      innerInputView: {
        //   backgroundColor: "lime",
          width: "100%",
          height: 55,
          marginBottom: 20,
      },
      addToCartBtn: {
        backgroundColor: "#4b51bc",
        height: 50,
        width: "100%",
        borderRadius: 50,
        marginVertical: 20,
        marginBottom: 15,
        justifyContent: "center",
        alignItems: "center",
    },
      addToCartText: {
        color: "white",
        fontSize: 22,
        fontWeight: "500",
      },
})

const mapDispatchToProps = {}

const mapStateToProps = (state) => {
    return {
        state
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Signupscreen);