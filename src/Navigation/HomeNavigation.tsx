import { View, Text } from "react-native";
import React from "react";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import Page1 from "../Components/Page1";
import Page2 from "../Components/Page2";

type RootStackParamList = {
  Page1: undefined;
  Page2: undefined;
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

const HomeNavigation: React.FC = (props: any) => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Page1"
        options={{ headerShown: false }}
        component={Page1}
      />
      <Stack.Screen
        name="Page2"
        options={{ headerShown: false }}
        component={Page2}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
