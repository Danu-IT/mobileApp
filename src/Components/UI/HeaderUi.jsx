import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

export default function HeaderUi() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.title}>PingPong</Text>
        <Icon style={styles.img} color="white"></Icon>
      </View>
      <TouchableOpacity>
        <Icon
          style={{ fontSize: 20, paddingTop: 5 }}
          color="white"
          name="bell"
        ></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 7,
  },
  title: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: "bold",
    color: "white",
  },
  img: {
    width: 20,
    height: 20,
  },
});
