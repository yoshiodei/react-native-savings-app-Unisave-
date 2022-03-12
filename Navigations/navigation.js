import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../Screens/Main";
import DepositScreen from "../Screens/DepositScreen";
import SendMoneyScreen from "../Screens/SendMoneyScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
