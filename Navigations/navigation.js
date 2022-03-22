import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../Screens/Main";
import DepositScreen from "../Screens/DepositScreen";
import SendMoneyScreen from "../Screens/SendMoneyScreen";
import QRCodeScreen from "../Screens/QRCodeScreen";
import TransactionsScreens from "../Screens/TransactionsScreen";
import EditPasswordScreen from "../Screens/EditPasswordScreen";
import SetPinScreen from "../Screens/SetPinScreen";
import WithdrawScreen from "../Screens/WithdrawScreen";
import RequestLoan from "../Screens/RequestLoan";

const Stack = createStackNavigator();

function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Deposit" component={DepositScreen} />
        <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
        <Stack.Screen name="QRCode" component={QRCodeScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreens} />
        <Stack.Screen name="EditPassword" component={EditPasswordScreen} />
        <Stack.Screen name="SetPin" component={SetPinScreen} />
        <Stack.Screen name="Withdraw" component={WithdrawScreen} />
        <Stack.Screen name="RequestLoan" component={RequestLoan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
