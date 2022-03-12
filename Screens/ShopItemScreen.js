import React from 'react';
import {View, StyleSheet, SafeAreaView, Text, ScrollView, TouchableOpacity} from 'react-native';


const Shopitemscreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.ImgBoxView}>

                </View>
                <View style={styles.headerView}>
                    <Text style={{
                        fontSize: 18,
                        color: "#3E3E3E",
                        fontWeight: "700"
                        }}>iPhone 13 Pro Max</Text>
                </View>
                <View style={{marginBottom: 15}}>
                    <Text style={{
                        fontSize: 14,
                        color: "#99999a",
                        fontWeight: "800",
                        marginBottom: 2
                    }}>Price</Text>
                    <View style={styles.priceView}>
                        <Text style={[{color: "#403f3f", marginRight: 10},styles.priceText]}>$</Text>
                        <Text style={[{color: "#403f3f"},styles.priceText]}>7,280.00</Text>
                    </View>
                </View>
                <View style={{marginBottom: 15}}>
                    <Text style={{
                        fontSize: 14,
                        color: "#99999a",
                        fontWeight: "800",
                        marginBottom: 7
                    }}>Description</Text>
                    <View>
                        <Text style={{
                        fontSize: 14,
                        color: "#403f3f",
                        fontWeight: "500",
                    }}>
                            Brand new iPhone 13 Pro Max, factory unlocked, 3 months factory defect warranty.
                            Space grey colour, comes with charger, ear piece and charger head. No phone case or protector added. 
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={{
                        fontSize: 14,
                        color: "#99999a",
                        fontWeight: "800",
                        marginBottom: 10
                    }}>Quantity</Text>
                    <View style={styles.quantityInnerView}>
                        <TouchableOpacity style={styles.btn}></TouchableOpacity>
                        <View style={styles.boxView}></View>
                        <TouchableOpacity style={styles.btn}></TouchableOpacity>
                    </View>
                </View>    
               
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        backgroundColor: "#D1D5EE",
        paddingHorizontal: 20,
      },
      quantityInnerView: {
          flexDirection: "row"
      },
      boxView: {
          backgroundColor: "white",
          borderRadius: 4,
          flex: 1,
          marginHorizontal: 8,
      },
      btn: {
          width: 35,
          height: 35,
          backgroundColor: "#BAC1EE",
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
        marginTop: 30,
        height: 180,
        width: "100%",
        backgroundColor: "white", 
      },
      priceView: {
          flexDirection: "row",
      }
})

export default Shopitemscreen;
