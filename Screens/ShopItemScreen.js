import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons';

import {View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity} from 'react-native';


const Shopitemscreen = ({navigation, route}) => {

    Number.prototype.format = function () {
        return this.toString().split( /(?=(?:\d{3})+(?:\.|$))/g ).join( "," );
    };

    const goBack = () => {
        navigation.goBack();
    }
    
    let [quantity, setQuantity] = useState(1);

    const plusHandler = () => {
        setQuantity(++quantity);
    }

    const minusHandler = () => {
        if(quantity > 1 )
        setQuantity(--quantity);
    }

    let {data, name} = route.params;

    return (
        <SafeAreaView style={styles.container}>
            

            <View style={styles.topView} >
                <TouchableOpacity style={styles.goBackBtn} onPress={goBack} >
                     <Entypo name="chevron-left" size={30} color="#4b51bc" />
                </TouchableOpacity>
                <Text style={styles.topViewText}>{name}</Text>
                <TouchableOpacity style={styles.iconBox}>
                     <Entypo name="shopping-cart" size={24} color="#4b51bc" />
                </TouchableOpacity>
            </View>


            <ScrollView style={{paddingHorizontal: 20}}>
                <View style={styles.ImgBoxView}>

                </View>
                <View style={styles.headerView}>
                    <Text style={{
                        fontSize: 24,
                        color: "#7b7fd5",
                        fontWeight: "700"
                        }}>{data.name}</Text>
                </View>
                <View style={{marginBottom: 15}}>
                    <Text style={{
                        fontSize: 14,
                        color: "#555557",
                        fontWeight: "800",
                        marginBottom: 2
                    }}>Price</Text>
                    <View style={styles.priceView}>
                        <Text style={[{color: "#7b7fd5", marginRight: 10},styles.priceText]}>Gh¢</Text>
                        <Text style={[{color: "#7b7fd5"},styles.priceText]}>{data.price.format()}.00</Text>
                    </View>
                </View>
                <View style={{marginBottom: 15}}>
                    <Text style={{
                        fontSize: 14,
                        color: "#555557",
                        fontWeight: "800",
                        marginBottom: 7
                    }}>Description</Text>
                    <View>
                        <Text style={{
                        fontSize: 14,
                        color: "#7b7fd5",
                        fontWeight: "500",
                    }}>
                            {data.description} 
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{
                        fontSize: 14,
                        color: "#555557",
                        fontWeight: "800",
                        marginBottom: 10
                    }}>Quantity</Text>
                    <View style={styles.quantityInnerView}>
                        <TouchableOpacity style={styles.btn} onPress={plusHandler}>
                            <Text style={{fontSize: 20, fontWeight: "700", color: "#eaebf4"}}>+</Text>
                        </TouchableOpacity>
                        <View style={styles.boxView}>
                            <Text style={{fontSize: 20, fontWeight: "700", color: "#696cab"}}>{quantity}</Text>
                        </View>
                        <TouchableOpacity style={styles.btn} onPress={minusHandler}>
                            <Text style={{fontSize: 20, fontWeight: "700", color: "#eaebf4"}}>-</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity style={styles.addToCartBtn}>
                    <Text style={styles.addToCartText}>Add To Cart</Text>
                </TouchableOpacity>    
               
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#D1D5EE",
    },
    // headerView: {
    //   height: 60,
    //   width: "100%",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   marginBottom: 20,
    // },
    quantityInnerView: {
      flexDirection: "row"
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
    boxView: {
          backgroundColor: "white",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          marginHorizontal: 8,
    },
    btn: {
          width: 60,
          justifyContent: "center",
          alignItems: "center",
          height: 35,
          backgroundColor: "#6773ac",
          borderRadius: 4,

    },
    headerView : {
        height: 40,
        width: "100%",
        justifyContent: "center",
    },
    priceText: {
          fontSize: 30,
          fontWeight: "700"
    },
    ImgBoxView: {
        // marginTop: 30,
        height: 180,
        width: "100%",
        backgroundColor: "white", 
    },
    priceView: {
        flexDirection: "row",
    },
    topView: {
        height: 60,
        width: "100%",
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        position: "relative",
    },
    topViewText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#3E3E3E"
      },
    goBackBtn: {
        height: 30,
        width: 30,
        borderRadius: 4,
        // backgroundColor: "blue",
        position: "absolute",
        justifyContent: "center",
        alignItems: "flex-start",
        left: 10,
        top: 15,
     },
     iconBox: {
        height: 30,
        width: 30,
        borderRadius: 4,
        // backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "flex-end",
        position: "absolute",
        right: 20,
        top: 15,
     },
     addToCartBtn: {
         backgroundColor: "#4b51bc",
         height: 50,
         width: "100%",
         borderRadius: 50,
         marginVertical: 20,
         justifyContent: "center",
         alignItems: "center",
     },
     addToCartText: {
         color: "white",
         fontSize: 22,
         fontWeight: "500",
     },
})

export default Shopitemscreen;
