import React,{useState} from 'react';
import {View, StyleSheet, SafeAreaView, Modal, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { connect } from 'react-redux';
import Toast from 'react-native-root-toast';
import { removeItem, addUpdatedAccount } from '../redux/action'; 

const Cartmodal = ({cart, setCart, account, removeItem, addUpdatedAccount}) => {

    // console.log("ietms in cart",account.cart.length);

    let grandTotal = account.cart.reduce((accummulator, item) => accummulator + (item.price * item.quantity), 0)

    const placeOrder = () => {
        if(grandTotal > account.wallet){
            setCart(false);
            Toast.show('You do not have enough balance to make purchase', {
                duration: Toast.durations.SHORT,
               });
        }else {
            let newBalance = account.wallet - grandTotal;
            let transactions = [];
            for (let item of account.cart){

                let report = { 
                    message: `You purchased ${item.quantity} ${item.name} at Gh¢ ${(item.price*item.quantity).toFixed(2)}`,
                    date: `${new Date().toLocaleString('default', {weekday: "long"})}, ${new Date().toLocaleString('default', {month: "long"})} ${new Date().getDate()}, ${new Date().getFullYear()} - ${new Date().toLocaleString().split(" ")[1].slice(0,-3)}`,
                    key: Math.random().toString(),
                    time: new Date().getTime().toString(),
                 };
                 transactions.push(report);
            }
            let newAccount = {...account, wallet: newBalance, cart: [], transactionReport: [ ...account.transactionReport, ...transactions ] };
            addUpdatedAccount(newAccount);
            console.log("updated account: ",account);
            Toast.show('Order placed successfully', {
                duration: Toast.durations.SHORT,
               }); 
            setCart(false);   
        } 
    }

    const removeCartItem = (key) => {
        let newCartList = account.cart.filter(item => item.key !== key);
        removeItem({...account, cart: [...newCartList]});
    }

    return (
       

        <Modal
          visible={cart}
          transparent
          animationType="slide" 
        >
          <SafeAreaView style={styles.modalView}>
            
            <View style={styles.modalHeader}>
              <Text style={styles.headerText}>Shopping Cart</Text>
              <TouchableOpacity style={styles.closeCartBtn} onPress={ ()=> setCart(false) } >
                    <FontAwesome name="close" size={18} color="white" />
              </TouchableOpacity>
            </View>

            


            {(account.cart.length > 0) && (<View style={{width: "100%", flex: 1, backgroundColor: "white"  }} >

            <FlatList
            data={account.cart}
            renderItem={
                ({item}) => (
                    <View style={styles.cartListItem}>
                            <View>
                                <Text style={{fontSize: 18, fontWeight: "600", color: "dimgray"}}>{item.name}</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 16, fontWeight: "500", color: "dimgray"}}>{`Quantity: ${item.quantity}`}</Text>
                            </View>
                            <View>
                                <Text style={{fontSize: 16, fontWeight: "500", color: "dimgray"}}>{`Price: Gh¢ ${item.price}`} </Text>
                            </View>
                            <TouchableOpacity style={styles.cartListItemBtn} onPress={()=>removeCartItem(item.key)}>
                                <AntDesign name="close" size={24} color="dimgray" />
                            </TouchableOpacity>
                    </View>
                )
            }
          />    

             


            <View style={styles.totalView}>
                <Text style={{fontSize: 16, fontWeight: "600", color: "dimgray"}}>{`Total: Gh¢ ${account.cart.reduce((accummulator, item) => accummulator + (item.price * item.quantity), 0).toFixed(2)}`}</Text>
                <Text style={{fontSize: 16, fontWeight: "600", color: "dimgray"}}>Discount: Gh¢ 00.00</Text>
                <Text style={{fontSize: 20, fontWeight: "600", color: "dimgray"}}>{`Grand Total: Gh¢ ${account.cart.reduce((accummulator, item) => accummulator + (item.price * item.quantity), 0).toFixed(2)}`}</Text>
            </View> 
            <TouchableOpacity style={{ height: 40, width: "50%",marginHorizontal: "25%", backgroundColor: "#4b51bc", borderRadius: 40, justifyContent: "center", alignItems: "center", marginVertical: 20 }}
              onPress={ placeOrder }>
               <Text style={{fontSize: 18, fontWeight: "500", color: "white"}} >Place Order</Text>
            </TouchableOpacity>
            </View>)}

            { (account.cart.length === 0) && (<ScrollView style={{width: "100%", flex: 1, backgroundColor: "white"  }} >  
            <Text style={{fontSize: 24, fontWeight: "500", color: "darkgray", textAlign: "center", marginTop: "50%"}}>There are no items in cart</Text>  
            </ScrollView>)}
          </SafeAreaView>  
        </Modal>

    );
}

const styles = StyleSheet.create({
    modalView:{
        width: "100%",
        flex: 1,
        // backgroundColor: "#000000b3",
        justifyContent: "center",
        alignItems: "center",
    },
    modalHeader: {
        width: "100%",
        marginTop: 5,
        height: 60,
        backgroundColor: "white",  
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "darkgray",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
        position: "relative",
       },
    headerText: {
        fontSize: 18,
        fontWeight: "600",
        color: "#3E3E3E"
      },
    closeCartBtn: {
        height: 26,
        width: 26,
        borderRadius: 50,
        backgroundColor: "dimgray",
        position: "absolute",
        right: 18, 
        alignItems: "center",
        justifyContent: "center",
    },
    cartListItem:{
        minHeight: 50,
        width: "100%",
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: "darkgray",
        position: "relative",
    },
    totalView: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        marginHorizontal: 20,
        marginTop: 10,
        backgroundColor: "#efeeee",
        borderRadius: 8,
    },
    cartListItemBtn: {
        height: 25,
        width: 25,
        // backgroundColor: "gray",
        top: 10,
        right: 20,
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    },
});

const mapStateToProps = (state) => {
    return {account: state.loggedInAccount[0] }
}

const mapDispatchToProps = { removeItem, addUpdatedAccount }

export default connect(mapStateToProps, mapDispatchToProps)(Cartmodal);
