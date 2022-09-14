import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import users from '../../utils/users'

import ImageCustom from "../ImageCustom";

export default function ChatItem() {


  return (
    <View>
      {users.map((chatItem) => {
        return (
          <TouchableOpacity onPress={() => console.log(chatItem.name)} key={chatItem.id} style={styles.container}>
            <ImageCustom
              style={styles.image}
              url={chatItem.image}
            ></ImageCustom>
            <View style={styles.message}>
              <Text style={styles.name}>{chatItem.name}</Text>
              <Text style={styles.messageText}>{chatItem.messages[0].split('').length >= 40 ? (chatItem.messages[0].split('').slice(0, 25).join('') + '...'): chatItem.messages[0]}</Text>
            </View>
            <View style={styles.time}>
              <Text style={styles.timeText}>{chatItem.time}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 15,
  },
  message: {
    width: "auto",
    flexGrow: 1,
    justifyContent: "space-evenly",
    marginLeft: 15,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
  messageText: {
    color: "white",
    fontSize: 15,
  },
  timeText: {
    color: "white",
    paddingTop: 5,
  },
});
