import React, {useState} from 'react';
import {View, StyleSheet,Image, Text, TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-root-toast';
import { connect } from "react-redux";
import { login } from '../redux/action';

const Signinscreen = ({navigation, state, login}) => {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    const userId = (text) => {
        setId(text);
    }

    const userPassword = (text) => {
        setPassword(text);
    }

    const signin = () => {
        if( !password || !id ){
            Toast.show('Please complete form to proceed', {
                duration: Toast.durations.SHORT,
            })
        } else if ( password && id ){
            let user = state.accounts.filter(account => ((account.email.toLowerCase() === id.toLowerCase() || account.phoneNumber === id) && account.password === password.toString()));

            //  console.log(user , id.toLowerCase(), password.toString());

            if(user.length === 1){
               console.log("user logged in", user); 
               login(user);
               navigation.replace('Mainscreen'); 
            } else {
                Toast.show('Please enter right credentials to proceed', {
                    duration: Toast.durations.SHORT,
                })
            }
        }  
    }

    const showToast = () => {
        Toast.show('Toast Shown.', {
            duration: Toast.durations.LONG,
        })
    }

    return (
        <SafeAreaView style={styles.container}>
                <View style={styles.imageView}>
                    <Image source={require('./../assets/unisave.png')} style={{width: "80%", height: "180%"}} resizeMode={'stretch'} />
                </View>
                <View style={{flex: 1}}>
                    <View style={styles.inputView}>
                        
                        <View style={styles.innerInputView}>
                            <Text style={styles.inputLabel}>Email / Phone Number</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => userId(text)}
                            />
                        </View>
                        <View style={styles.innerInputView}>
                            <Text style={styles.inputLabel}>Password</Text>
                            <TextInput
                                style={styles.input}
                                onChangeText={(text) => userPassword(text)}
                                secureTextEntry
                            />
                        </View>
                    </View>
                    <View style={{width: "100%", paddingHorizontal: 20, }}>
                        <TouchableOpacity style={styles.addToCartBtn} onPress={signin} >
                            <Text style={styles.addToCartText}>Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} style={{marginBottom: 20}}
                            onPress={()=> navigation.navigate('Signupscreen') }
                        >
                            <Text style={{textAlign: "center", color: "blue", textDecorationLine: "underline", fontSize: 13 }}>Don't have an account? Click here to SignUp</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

const mapStateToProps = (state) => {
    return { state }
}

const mapDispatchToProps = { login }

export default connect(mapStateToProps, mapDispatchToProps)(Signinscreen);
