import React from "react";
import { View,Text } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import home from "./src/home";
import { color } from "react-native-reanimated";
import details from "./src/details";
import Home from "./src/home";
import Details from "./src/details";
const stack=createNativeStackNavigator();
export default function App()  {
    return (
      <NavigationContainer>
        <stack.Navigator screenOptions={{
          headerShown:false
        }}>
           <stack.Screen name="Weather" component={Home} />
           <stack.Screen name="Detail" component={Details} />
        </stack.Navigator>
      </NavigationContainer>
    )
}