import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  Button,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
// import { LinearGradient } from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Footer({ navigation }) {

  const route = useRoute();

  const chekActive = (page) => {
    return route.name == page ? '#1E90FF' : 'white'
  }

  const transitionPages = (page) => {
    return route.name == page ? null : navigation.replace(page)
  }

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => transitionPages('HomePage')}>
          <Icon style={styles.icon} color={chekActive('HomePage')} name='home'></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => transitionPages('Conversation')}>
          <Icon style={styles.icon} color={chekActive('Conversation')} name='comments'></Icon>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerIcon}>
          <Icon
            style={styles.iconText}
            color='white'
            name='plus'
          ></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => transitionPages('Photos')}>
          <Icon style={styles.icon} color={chekActive('Photos')} name='photo'></Icon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => transitionPages('User')}>
          <Icon style={styles.icon} color={chekActive('User')} name='user'></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderColor: "gray",
    borderWidth: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: "#1C1C1C",
    margin: -2,
  },
  icon: {
    fontSize: 30,
  },
  containerIcon: {
    width: 60,
    height: 60,
    backgroundColor: "#1E90FF",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  iconText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
