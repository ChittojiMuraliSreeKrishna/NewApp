import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Body from "../Components/Body";
import Login from "../Components/Login";
import { StyleSheet, Text, View } from "react-native";
import Home from "../Components/Home";

type RootStackParamList = {
  Body: undefined;
  Login: undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: "grey",
  },
  headerTintColor: "white",
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const StartNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Body"
          component={Body}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StartNavigation;
