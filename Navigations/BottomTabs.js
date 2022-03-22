import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import screens
import Dashboard from "../Screens/Dashboard";
import ShopScreen from "../Screens/ShopScreen";
import AccountScreen from "../Screens/AccountScreen";
//import icons
import {
  SimpleLineIcons,
  Entypo,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";
import Walletscreennav from "../Screens/WalletScreenNav";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Wallet"
        component={Walletscreennav}
        options={{
          tabBarIcon: (props) => (
            <SimpleLineIcons name="wallet" size={28} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: (props) => (
            <Entypo name="bar-graph" size={28} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarIcon: (props) => (
            <AntDesign name="shoppingcart" size={28} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: (props) => (
            <Ionicons name="person" size={28} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
