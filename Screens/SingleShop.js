import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList } from "react-native";
import React, {useState} from "react";
import { Entypo } from '@expo/vector-icons';

const SingleShop = ({navigation, route}) => {

    let {name, data} = route.params;

    const presshandler = (data) => {
        navigation.navigate("Shopitemscreen", {data, name});
    }

    const goBack = () => {
        navigation.goBack();
    }

    Number.prototype.format = function () {
        return this.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
    };

    let [search, setSearch] = useState("");

    const filteredData = data.filter( item => item.name.toLowerCase().includes(search.toLowerCase()) );

    return (
      <SafeAreaView style={styles.container}>


        <View style={styles.headerView}>
                <TouchableOpacity style={styles.goBackBtn} onPress={goBack} >
                     <Entypo name="chevron-left" size={30} color="#4b51bc" />
                </TouchableOpacity>
                <Text style={styles.headerText}>{name}</Text>
                <TouchableOpacity style={styles.iconBox}>
                     <Entypo name="shopping-cart" size={24} color="#4b51bc" />
                </TouchableOpacity>
        </View>


        <View style={styles.searchView}>
          <TextInput
          placeholder="Search Item"
          style={styles.searchBox}
          onChangeText={(text)=> setSearch(text)}
          />
        </View>


        <View style={styles.listView}>
        <FlatList
        showsVerticalScrollIndicator="false"
        data={filteredData}
        renderItem={({item})=>(
            
          <TouchableOpacity style={styles.listItem}
            onPress={()=> presshandler(item) }
          >
            <View style={styles.listItemImgBox}></View>
            <View style={styles.listItemTextBox}>
              <Text style={{fontSize: 16, fontWeight: "700", color: "#7b7fd5", marginBottom: 5}}>{item.name}</Text>
              <Text style={{fontSize: 22, color: "white" , fontWeight: "700"}}>Gh¢ {item.price.format()}.00</Text>
            </View>
          </TouchableOpacity>
  
       
        )}
        />
         </View>
        
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
      position: "relative",
    },
    goBackBtn: {
       height: 30,
       width: 30,
       borderRadius: 4,
    //    backgroundColor: "blue",
       position: "absolute",
       left: 10,
       top: 15,
    },
    iconBox: {
       height: 30,
       width: 30,
       borderRadius: 4,
    //    backgroundColor: "blue",
       justifyContent: "center",
       alignItems: "flex-end",
       position: "absolute",
       right: 20,
       top: 15,
    },
    dotView: {
        height: 10,
        width: 10,
        borderRadius: 50,
        backgroundColor: "tomato",
        left: 3,
        top: 1,
        position: "absolute",
        zIndex: 1,
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
      // borderRadius: 8,
      // backgroundColor: "#BAC1EE",
      marginBottom: 10,
      paddingBottom: 8,
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#bfbfc3",
    },
    listItemImgBox: {
      height: "100%",
      width: 150,
      borderRadius: 2,
      backgroundColor: "white",
      marginRight: 10,
    },
    listItemTextBox:{
      height: 75,
      flex: 1
    },
    headerText: {
      fontSize: 18,
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
      