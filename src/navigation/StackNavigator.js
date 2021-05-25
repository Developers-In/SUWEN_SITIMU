import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LocalDataScreen from "../screens/LocalDataScreen";
import GlobalDataScreen from "../screens/GlobalDataScreen";
import TimelineScreen from "../screens/TimelineScreen";
import OpenItemScreen from "../screens/OpenItemScreen"

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sri Lanka" component={LocalDataScreen} options={{headerShown: false}} />
      {/* <Stack.Screen name="Global" component={GlobalDataScreen} /> */}
      <Stack.Screen name="Police_Stations" component={OpenItemScreen} screenOptions={screenOptionStyle} />
    </Stack.Navigator>
  );
};

const TimelineStackNavigator = () => {
  return (
    <Stack.Navigator /*screenOptions={screenOptionStyle}*/ headerMode={"none"}>
      <Stack.Screen name="Your history" component={TimelineScreen} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, TimelineStackNavigator };