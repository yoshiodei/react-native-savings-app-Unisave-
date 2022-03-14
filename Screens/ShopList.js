import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, FlatList  } from "react-native";
import React, {useState} from "react";
import { Entypo } from '@expo/vector-icons';


const ShopList = ({navigation}) => {

   const data = [
        {
            name: "Lexis iShop",
            description: "We dealers in phones, laptops, tablets and other devices",
            key: "LI",
            items: [
                {
                    name: "iPhone 13 Pro Max",
                    key: "LI001",
                    price: 7810,
                    description: "Brand new iPhone 13 Pro Max, factory unlocked, 3 months factory defect warranty. Space grey colour, comes with charger, ear piece and charger head. No phone case or protector added."
                 },
                {
                    name: "Mac Book Pro",
                    key: "LI002",
                    price: 15250,
                    description: "Lorem ipsum imei ami kuhm nuag an ini bilaha sug juiam imei dolor ord thur fikim laikf rima darwa me yaman tulame reil waal kum hemah tuula ula wima dik mowli kat zatigh"
                 },
                {
                    name: "Samsung S22 Ultra",
                    key: "LI003",
                    price: 6800,
                    description: "Karfi larm reil waal nuag an ini bilaha sug juiam imei dolor ord thur fikim laikf rima darwa me yaman tulame reil waal kum hemah tuula ula wima dik mowli kat zatigh"
                 },
                {
                    name: "iPad Air",
                    key: "LI004",
                    price: 9420,
                    description: "Swal kum hemah tuula ipsum imei ami iam imei dolor ord thur fikim karfi larm reil waal kum hemah tu kula munm tanli rina saif  kali wli ula wima dik mowli kat zatigh"
                 },
                {
                    name: "Air Pod 3",
                    key: "LI005",
                    price: 1210,
                    description: "Alna munm tanli rina saif  kali wli imei ami kuhm nuag an ini bilaha sug juiam imei dolor ord thur fikim lai ula wima dik mowli kat zatigh"
                 },
                 {
                    name: "Beats By Dre",
                    key: "LI006",
                    price: 1210,
                    description: "Ola wima dik mowli kat zatigh sami laer tajim kan molen sore khaf tazmah junih sawe ini ze mornij lamak meh tuhnk kalim shahad cumk lakan tibo cotoo malag saar mort lehm"
                 }
            ]
        },
        {
            name: "Cheesy Burger",
            key: "CB",
            description: "Get your hot cheesy burger here today!",
            items: [
                {
                    name: "Spicy Cheese Burger",
                    key: "CB001",
                    price: 15,
                    description: "Lorem ipsum imei ami kuhm nuag an ini bilaha sug juiam imei dolor ord thur fikim laikf rima darwa me yaman tulame reil waal kum hemah tuula ula wima dik mowli kat zatigh"
                 },
                {
                    name: "Regular Cheese Burger",
                    key: "CB002",
                    price: 8,
                    description: "Lorem ipsum imei ami tifi gubun Tagj koomla sug juiam imei dolor ord thur fikim karfi larm reil waal kum hemah tuula ula wima dik mowli kat zatigh"
                 },
                {
                    name: "Double Cheese Burger",
                    key: "CB003",                    
                    price: 25,
                    description: "Lorem ipsum imei ami iam imei dolor ord thur fikim karfi larm reil waal kum hemah tu kula munm tanli rina saif  kali wli kat zatigh"
                 }
            ]
        },
        {
            name: "Eddy's Bookstore",
            description: "All books from science fiction, drama, novel, comics and more right here",
            key: "EB",
            items: [
                {
                    name: "Naruto Shippudden collection",
                    key: "EB001",
                    price: 50,
                    description: "Lorem ipsum imei ami iam imei dolor ord thur fikim karfi larm reil waal kum hemah tu kula munm tanli rina saif  kali wli kat"
                },
                {
                    name: "Harry Potter Collection",
                    key: "EB002",
                    price: 72,
                    description: "Lorem ipsum imei ami tifi gubun Tagj koomla sug juiam imei dolor ord thur fikim karfi larm reil waal kum hemah tuula ula wima dik mowli kat zatigh"
                },
                {
                    name: "Compound Effect",
                    key: "EB003",
                    price: 72,
                    description: "Lorem ipsum imei ami tifi gubun Tagj koomla sug juiam imei dolor ord thur fikim karfi larm reil waal kum hemah tuula ula wima dik mowli kat zatigh"
                },
                {
                    name: "Longman Encyclopedia",
                    key: "EB004",
                    price: 250,
                    description: "Alna munm tanli rina saif  kali wli imei ami kuhm nuag an ini bilaha sug juiam imei dolor ord thur fikim lai ula wima dik mowli kat zatigh"
                },
                {
                    name: "Animal Farm",
                    key: "EB005",
                    price: 45,
                    description: "Swal kum hemah tuula ipsum imei ami iam imei dolor ord thur fikim karfi larm reil waal kum hemah tu kula munm tanli rina saif  kali wli ula wima dik mowli kat zatigh"
                }
            ]
        },
        {
            name: "Pizza King",
            description: "Hot and cheesy pizza right at your door step",
            key: "PK",
            items: [
                {
                    name: "Super Cheesy Pizza",
                    key: "PK001",
                    price: 38,
                    description: "Lorem ipsum imei ami iam imei dolor ord thur fikim karfi larm reil waal kum hemah tu kula munm tanli rina saif  kali wli kat"
                },
                {
                    name: "Pepperoni Pizza",
                    key: "PK002",
                    price: 52,
                    description: "Lorem ipsum imei ami iam imei dolor ord thur fikim karfi larm reil waal kum hemah tu kula munm tanli rina saif  kali wli kat"
                },
                {
                    name: "All Season Pizza",
                    key: "PK003",
                    price: 67,
                    description: "Lorem ipsum imei ami iam imei dolor ord thur fikim karfi larm reil waal kum hemah tu kula munm tanli rina saif  kali wli kat"
                }
            ]
        }
    ]

    const handlePress = (name, data) => {
        navigation.navigate("Single Shop", {name, data})
    }

    let [search, setSearch] = useState("");

    const filteredData = data.filter( item => item.name.toLowerCase().includes(search.toLowerCase()) );

    return (
      <SafeAreaView style={styles.container}>

        <View style={styles.headerView}>
          <Text style={styles.headerText}>Uni Shop</Text>
          <TouchableOpacity style={styles.iconBox}>
                     <View style={styles.dotView}></View>
                     <Entypo name="shopping-cart" size={24} color="#4b51bc" />
          </TouchableOpacity>
        </View>  


        <View style={styles.searchView}>
          <TextInput
          placeholder="Search Shop"
          style={styles.searchBox}
          onChangeText={ (text) => setSearch(text) }
          />
        </View>
        <View style={styles.listView}>

          <FlatList
            data={filteredData}
            renderItem={
                ({item}) => (
                    <TouchableOpacity 
                    style={styles.listItem}
                    onPress={()=>handlePress(item.name, item.items)}
                    >
                        <View style={styles.listItemImgBox}></View>
                        <View style={styles.listItemTextBox}>
                        <Text style={{fontSize: 16, fontWeight: "600", color: "#484747"}}>
                            {item.name}</Text>
                        <Text style={{fontSize: 14, color: "white"}}>{item.description}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
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
    iconBox:{
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
      export default ShopList;
      