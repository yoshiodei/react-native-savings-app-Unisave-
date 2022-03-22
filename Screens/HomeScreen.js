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
