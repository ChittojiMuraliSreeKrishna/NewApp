import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import HomeNavigation from "../Navigation/HomeNavigation";

const Home: React.FC = (props: any) => {
  const returnBack = () => {
    props.navigation.push("Login");
  };

  const navigatePage1 = () => {
    props.navigation.navigate("Page1");
  };
  const navigatePage2 = () => {
    props.navigation.navigate("Page2");
  };
  return (
    <View style={styles.body}>
      <View style={styles.heading}>
        <Text style={styles.text}>
          Welcome <Text style={styles.innerText}>{}</Text>
        </Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={returnBack}>
          <Text style={styles.logoutText}>Logout.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.navPage}>
        <HomeNavigation />
      </View>
      <View style={styles.butt_container}>
        <TouchableOpacity style={styles.buttons} onPress={navigatePage1}>
          <Text style={styles.butt_text}>{"< "}Page1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons} onPress={navigatePage2}>
          <Text style={styles.butt_text}>Page2{" >"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  body: {
    height: "100%",
  },
  text: {
    fontSize: 20,
  },
  innerText: {
    color: "green",
    fontWeight: "900",
  },
  butt_container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 21,
  },
  buttons: {
    marginHorizontal: 5,
    backgroundColor: "#090",
    width: "22%",
    height: 30,
  },
  butt_text: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    marginVertical: 3,
  },
  logoutBtn: {
    backgroundColor: "#900",
    width: 70,
    height: 25,
    borderRadius: 3,
  },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  navPage: {
    width: "80%",
    marginHorizontal: "10%",
    height: 400,
  },
  heading: {
    height: "12%",
    backgroundColor: "grey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-end",
    paddingBottom: 15,
  },
});
