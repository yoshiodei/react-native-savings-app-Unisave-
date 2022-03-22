import React from 'react';
import {View, StyleSheet,Image, Text, TouchableOpacity,ScrollView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const Signupscreen = ({navigation}) => {

    const signup = () => {
        navigation.replace('Mainscreen');
    }


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
                        />
                    </View>
                    
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Email</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Student ID</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.innerInputView}>
                        <Text style={styles.inputLabel}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
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

export default Signupscreen;
