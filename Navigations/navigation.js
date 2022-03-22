import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../Screens/Main";

const Stack = createStackNavigator();

function StackNav() {
  return (
    
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    
  );
}

export default StackNav;
