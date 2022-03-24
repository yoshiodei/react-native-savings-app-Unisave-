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

const DATA = [
  {
    notification: "Sent Ghc 7,450.00 to Bilal",
    date: "Monday, 7th March 2022",
    time: "5: 30",
  },
  {
    notification: "Received Ghc 582.00 from Prince",
    date: "Saturday, 5th March 2022",
    time: "5: 00",
  },
  {
    notification: "Bought Pizza from Pizza King",
    date: "Tuesday, 10th February 2022",
    time: "10: 30",
  },
  {
    notification: "Received Loan of Ghc 1,600.00",
    date: "Friday, 13th April 2022",
    time: "3: 15",
  },
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <View style={styles.transactionsList}>
      <Image
        style={{ height: 50, width: 50, borderRadius: 5, marginRight: 10 }}
        source={{
          uri: "https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png",
        }}
      />
      <View>
        <Text style={{ fontSize: 16, marginBottom: 5 }}>
          {item.notification}
        </Text>
        <Text style={{ fontSize: 12, color: "grey" }}>
          {item.date}-{item.time}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

// create a component
const TransactionsScreens = ({ navigation }) => {
  const [selectedId, setSelectedId] = useState(null);

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
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
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
    height: "10%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  transactionsLists: {
    height: "100%",
    padding: 20,
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

//make this component available to the app
export default TransactionsScreens;
