//import liraries
import React, { Component } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import * as Progress from "react-native-progress";

// create a component
const Dashboard = () => {

  // const [value, setValue] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      <View style={styles.interestView}>
        <View style={styles.interestBox}>
          <CountdownCircleTimer
            initialRemainingTime={3600}
            updateInterval={1}
            size={250}
            strokeWidth={15}
            isPlaying
            trailColor="white"
            duration={3600}
            colors={["#7b7fd5", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[7, 5, 2, 0]}
          >
            {({ remainingTime }) => (
              <View style={{ alignItems: "center" }}>
                <SimpleLineIcons name="wallet" size={60} color="black" />
                <Text
                  style={{ fontSize: 20, color: "#7b7fd5", fontWeight: "600" }}
                >
                  {remainingTime} secs
                </Text>
                <Text style={{ color: "grey" }}>
                  untill next interest increment
                </Text>
                <Text>
                  Ghc{"  "}
                  <Text
                    style={{
                      fontSize: 25,
                      color: "#7b7fd5",
                      fontWeight: "600",
                    }}
                  >
                    85.00
                  </Text>
                </Text>
              </View>
            )}
          </CountdownCircleTimer>
        </View>
      </View>

      <View style={styles.loantView}>
        <View style={styles.loanBox}>
          <View style={styles.loanImgBox}>
            <Image
              source={require("./../assets/loan.png")}
              style={{ height: "60%", width: "60%", opacity: 0.9 }}
            />
          </View>
          <View style={styles.loanInfoBox}>
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "600",
                  color: "#7b7fd5",
                  marginBottom: 2,
                }}
              >
                2days 4hrs 32sec
              </Text>
              <Text
                style={{
                  color: "gray",
                }}
              >
                until next loan increment
              </Text>
            </View>
            <Progress.Bar
              progress={0.3}
              color="tomato"
              unfilledColor="white"
              height={10}
              width={200}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#D1D5EE",
    paddingHorizontal: 20,
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
  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#3E3E3E",
  },
  interestView: {
    height: 320,
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  interestBox: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#BAC1EE",
    borderRadius: 10,
  },
  loantView: {
    height: 100,
    width: "100%",
    paddingHorizontal: 20,
  },
  loanBox: {
    width: "100%",
    height: "100%",
    backgroundColor: "#BAC1EE",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 9,
  },
  loanImgBox: {
    height: 85,
    width: 85,
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  loanInfoBox: {
    // backgroundColor: "pink",
    flex: 1,
    height: "100%",
    alignSelf: "flex-start",
    justifyContent: "space-between",
  },
});

// //make this component available to the app
export default Dashboard;
