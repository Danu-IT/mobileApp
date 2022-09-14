import {
  Button,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Animated,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome";
import { useEffect, useState } from "react";

export default function Status({ navigation }) {
  const route = useRoute().params.story;

  useEffect(() => {
    let timer = setTimeout(() => {
      navigation.goBack();
    }, 5000);

    Animated.timing(progress, {
      toValue: 5,
      duration: 5000,
      useNativeDriver: false,
    }).start();
    return () => clearTimeout(timer);
  }, []);

  const [progress, setProgress] = useState(new Animated.Value(0));

  const progressAnimation = progress.interpolate({
    inputRange: [0, 5],
    outputRange: ["0%", "100%"],
  });

  return (
    <View style={styles.container}>
      <View style={styles.story}>
        <Animated.View
          style={{
            height: "100%",
            backgroundColor: "#1E90FF",
            width: progressAnimation,
          }}
        ></Animated.View>
      </View>
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          alignItems: "center",
          position: "absolute",
          top: 52,
          left: 0,
          width: "90%",
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: route.image }}></Image>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{route.name}</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon style={styles.icon} name="close"></Icon>
          </TouchableOpacity>
        </View>
      </View>
      <Image style={styles.mainImage} source={{ uri: route.image }}></Image>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.sendMessage}
      >
        <TextInput
          placeholderTextColor="white"
          placeholder="Напиши сообщение"
          style={styles.sendMessageInput}
        ></TextInput>
        <Icon style={{ color: "white", fontSize: 20 }} name="send"></Icon>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    flex: 1,
  },
  story: {
    height: 3,
    width: "95%",
    borderWidth: 1,
    backgroundColor: "gray",
    position: "absolute",
    top: 58,
  },
  image: {
    borderRadius: 100,
    backgroundColor: "#1E90FF",
    resizeMode: "cover",
    width: "92%",
    height: "92%",
  },
  imageContainer: {
    borderRadius: 100,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  nameText: {
    fontSize: 15,
    color: "white",
    marginLeft: 10,
  },
  nameContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
  },
  icon: {
    fontSize: 20,
    color: "white",
    opacity: 0.6,
  },
  mainImage: {
    position: "absolute",
    width: "100%",
    height: "70%",
    top: 110,
    objectFit: "cover",
  },
  sendMessage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
    width: "100%",
    marginBottom: 85,
  },
  sendMessageInput: {
    borderColor: "white",
    borderRadius: 25,
    width: "85%",
    paddingLeft: 20,
    height: 50,
    borderWidth: 1,
    fontSize: 20,
    color: "white",
  },
});
