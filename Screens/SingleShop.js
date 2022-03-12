import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from "react-native";
import React from "react";

const SingleShop = ({navigation}) => {

    const presshandler = () => {
        navigation.navigate("Shopitemscreen")
    }

    return (
      <SafeAreaView style={styles.container}>
        {/* <View style={styles.headerView}>
          <Text style={styles.headerText}>Lexis iShop</Text>
        </View> */}
        <View style={styles.searchView}>
          <TextInput
          placeholder="Search Item"
          style={styles.searchBox}
          />
        </View>
        <ScrollView style={styles.listView}>
          <TouchableOpacity style={styles.listItem}
            onPress={presshandler}
          >
            <View style={styles.listItemImgBox}></View>
            <View style={styles.listItemTextBox}>
              <Text style={{fontSize: 16, fontWeight: "600", color: "#484747"}}>Lexis iShop</Text>
              <Text style={{fontSize: 14, color: "white"}}>Dealers in phones, laptops, tablet etc.</Text>
            </View>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemImgBox}></View>
            <View style={styles.listItemTextBox}>
              <Text style={{fontSize: 16, fontWeight: "600", color: "#484747"}}>Lexis iShop</Text>
              <Text style={{fontSize: 14, color: "white"}}>Dealers in phones, laptops, tablet etc.</Text>
            </View>
          </TouchableOpacity>
  
          <View style={styles.listItem}>
            <View style={styles.listItemImgBox}></View>
            <View style={styles.listItemTextBox}>
              <Text style={{fontSize: 16, fontWeight: "600" , color: "#484747"}}>Lexis iShop</Text>
              <Text style={{fontSize: 14, color: "white"}}>Dealers in phones, laptops, tablet etc.</Text>
            </View>
          </View>
  
          <View style={styles.listItem}>
            <View style={styles.listItemImgBox}></View>
            <View style={styles.listItemTextBox}>
              <Text style={{fontSize: 16, fontWeight: "600", color: "#484747"}}>Lexis iShop</Text>
              <Text style={{fontSize: 14, color: "white"}}>Dealers in phones, laptops, tablet etc.</Text>
            </View>
          </View>
          
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  // define your styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#D1D5EE",
    },
    headerView: {
      height: 60,
      width: "100%",
      // backgroundColor: "pink",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    searchView: {
      height: 60,
      width: "100%",
      // backgroundColor: "hotpink",
      paddingHorizontal: 20,
      justifyContent: "center",
      marginTop: 30,
    },
    listView: {
      flex: 1,
      width: "100%",
      // backgroundColor: "pink",
      paddingHorizontal: 20,
      paddingTop: 10,
    },
    listItem: {
      height: 90,
      width: "100%", 
      borderRadius: 8,
      backgroundColor: "#BAC1EE",
      marginBottom: 10,
      paddingHorizontal: 8,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
    },
    listItemImgBox: {
      height: 75,
      width: 75,
      borderRadius: 6,
      backgroundColor: "white",
      marginRight: 10,
    },
    listItemTextBox:{
      height: 75,
      flex: 1
    },
    headerText: {
      fontSize: 28,
      fontWeight: "600",
      color: "#3E3E3E"
    },
    searchBox: {
      height: "80%",
      borderRadius: 4,
      backgroundColor: "white",
      paddingHorizontal: 10,
      fontSize: 16,
    }
  });

      //make this component available to the app
      export default SingleShop;
      