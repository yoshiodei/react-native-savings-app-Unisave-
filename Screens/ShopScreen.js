//import liraries
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import Shopitemscreen from './ShopItemScreen';
import ShopList from './ShopList';
import SingleShop from './SingleShop';

const Stack = createStackNavigator();

// create a component
const ShopScreen = () => {
  return (
    <Stack.Navigator
      screenOptions={{
      headerStyle: { backgroundColor: '#D1D5EE' },
      gestureEnabled: false,
      headerBackTitleVisible: false
    }}
    >
      <Stack.Screen name="Uni Shop" component={ShopList} />
      <Stack.Screen name="Lexis iShop" component={SingleShop}/>
      <Stack.Screen name="Shopitemscreen" component={Shopitemscreen} /> 
    </Stack.Navigator>
  );
};


//make this component available to the app
export default ShopScreen;
