//import liraries
import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from 'react-redux'; 
 
const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.transactionsList}>
      <Image
        style={{ height: 50, width: 50, borderRadius: 5, marginRight: 10 }}
        source={{
          uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        }}
      />
      <View style={{ width: "100%", paddingRight: 50}}>
        <Text style={{ fontSize: 16, marginBottom: 5,  }}>
          {item.message}
        </Text>
        <Text style={{ fontSize: 12, color: "grey" }}>
          {item.date}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

// create a component
const TransactionsScreens = ({ navigation, transactions }) => {
  const [selectedId, setSelectedId] = useState(null);

  let sortedTransaction = transactions.sort((a,b) => b.time -a.time);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        //onPress={() => navigation.navigate("ReviewSection", { item: item })}
      />
    );
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="chevron-back"
          size={30}
        />
        <Text style={styles.headerTitle}>Transaction Record</Text>
        <View></View>
      </View>

      <View style={styles.transactionsLists}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "600",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Last Transactions
        </Text>
  
        <View>
          <FlatList
            data={sortedTransaction}
            renderItem={renderItem}
            extraData={selectedId}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D1D5EE",
  },
  headerView: {
    height: "8%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  transactionsLists: {
    flex: 1,
    padding: 20,
    width: "100%",
    marginBottom: 10
    //backgroundColor: "#BAC1EE",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "500",
  },
  transactionsList: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "silver",
    borderBottomWidth: 1,
  },
});

const mapDispatchToProps = (state) => {
  return { transactions :  state.loggedInAccount[0].transactionReport}
}

//make this component available to the app
export default connect(mapDispatchToProps)(TransactionsScreens);
