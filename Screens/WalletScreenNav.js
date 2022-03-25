import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from "react";
import DepositScreen from './DepositScreen';
import SendMoneyScreen from './SendMoneyScreen';
import WalletScreen from "./WalletScreen";
import Scanner from "./Scanner";



const Stack = createStackNavigator();

// create a component
const Walletscreennav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
      gestureEnabled: false,
      headerBackTitleVisible: false,
      header: () => null
    }}
    >
      <Stack.Screen name="Wallet Screen" component={WalletScreen} />
      <Stack.Screen name="Deposit Screen" component={DepositScreen} />
      <Stack.Screen name="Send Money Screen" component={SendMoneyScreen} />
      <Stack.Screen name="Scanner Screen" component={Scanner} />
       
    </Stack.Navigator>
  );
};


//make this component available to the app
export default Walletscreennav;
