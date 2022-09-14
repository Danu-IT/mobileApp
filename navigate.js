import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import HomePage from "./src/pages/HomePage";
import LoginPage from "./src/pages/Authorization/LoginPage";
import Conversation from "./src/pages/Conversation";
import Photos from './src/pages/Photos'
import User from './src/pages/User'
import Status from './src/pages/Status'

import  HeaderUi  from "./src/Components/UI/HeaderUi";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTintColor: '#fff',
      }}
      >
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{
            title: "Авторизация",
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: (
                <HeaderUi/>
            ),
            headerStyle: {
              backgroundColor: "#1C1C1C",
            },
          }}
        />
        <Stack.Screen
          name="Conversation"
          component={Conversation}
          options={{
            title: (
              <HeaderUi/>
            ),
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#1C1C1C",
            },
          }}
        />
        <Stack.Screen
          name="Photos"
          component={Photos}
          options={{
            title: <HeaderUi/>,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#1C1C1C",
            },
          }}
        />
        <Stack.Screen
          name="User"
          component={User}
          options={{
            title: <HeaderUi/>,
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: "#1C1C1C",
              borderWidth: 0
            },
          }}
        />
        <Stack.Screen
          name="Status"
          component={Status}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
