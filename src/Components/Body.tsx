import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useEffect } from "react";

const Body = (props: any) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate("Login");
    }, 2500);
  }, []);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome To My App</Text>
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  body: {
    height: "100%",
    marginVertical: "50%",
    marginHorizontal: "20%",
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
  },
});
