//import liraries
import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Signinscreen from './SignInScreen';
import Signupscreen from './SignUpScreen';
import { NavigationContainer } from "@react-navigation/native";
import StackNav from '../Navigations/navigation';



const Stack = createStackNavigator();

// create a component
const HomeScreen = () => {

  const accounts = [
    {
      fullName: "Bilal Zakari",
      phoneNumber: "0206660419",
      email: "bil@mail.com",
      studentID: "4710215",
      password: "1234567890",
      points: 50,
      wallet: 4186.54,
      nextInterestIncTime: "",
      nextInterestIncAmount: "",
      nextLoanIncTime: "",
      nextLoanIncAmount: "",
      notification: [],
      purchaseReceipt: [],
      PIN: 1234,
      QRCode: "dpuVy67ieoUCE",
    },
    {
      fullName: "Yoshi Odei",
      phoneNumber: "0271242083",
      email: "yoshi@mail.com",
      studentID: "4710219",
      password: "1234567890",
      points: 30,
      wallet: 2986.05,
      nextInterestIncTime: "",
      nextInterestIncAmount: "",
      nextLoanIncTime: "",
      nextLoanIncAmount: "",
      notification: [],
      purchaseReceipt: [],
      PIN: 1234,
      QRCode: "IjeplKd89EvcEt",
    },
    {
      fullName: "Price Antwi",
      phoneNumber: "0244726391",
      email: "prince@mail.com",
      studentID: "4710218",
      password: "1234567890",
      points: 60,
      wallet: 8003.15,
      nextInterestIncTime: "",
      nextInterestIncAmount: "",
      nextLoanIncTime: "",
      nextLoanIncAmount: "",
      notification: [],
      purchaseReceipt: [],
      PIN: 1234,
      QRCode: "iHtjOsP941Et",
    },
  ];

  

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ gestureEnabled: false, headerBackTitleVisible: false, header: () => null }}>
            <Stack.Screen name="Signinscreen" component={Signinscreen} />
            <Stack.Screen name="Signupscreen" component={Signupscreen} />
            <Stack.Screen name="Mainscreen" component={StackNav} />
        </Stack.Navigator>
    </NavigationContainer>  
  );
};


export default HomeScreen;
