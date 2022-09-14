import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { IOScrollView, InView } from "react-native-intersection-observer";
import users from "../utils/users";

import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Ionic from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

import Icon from "react-native-vector-icons/FontAwesome";

export default function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 30;
  let countAvatar = 0;
  let countAvatarBottom = 0;
  let countName = 0;
  // При получении данных присваивать переменной и перед обновлением добавлять новые поля и после обновления засунуть в состояние

  const fetchPosts = (page, limit) => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`
    )
      .then((response) => response.json())
      .then((json) => {
        for (let i = 0; i <= json.length - 1; i++) {
          json[i].isLiked = false;
          json[i].likes = i * 2 + 5;
        }
        return json;
      })
      .then((posts) => setNews(posts));
  };

  const listAvatar = (list) => {
    return countAvatar == list.length - 1 ? (countAvatar = 0) : countAvatar++;
  };

  const listAvatarBottom = (list) => {
    return countAvatarBottom == list.length - 1
      ? (countAvatarBottom = 0)
      : countAvatarBottom++;
  };

  const listName = (list) => {
    return countName == list.length - 1 ? (countName = 0) : countName++;
  };

  useEffect(() => {
    fetchPosts(page, limit);
  }, []);

  const likedCheked = (object) => {
    object.isLiked ? (object.isLiked = false) : (object.isLiked = true);
    object.isLiked ? object.likes++ : object.likes--;
    setNews((prev) => [...prev, { object }]);
  };


  return (
    <IOScrollView>
      {news.map((newsItem) => {
        return (
          <View key={newsItem.id} style={styles.container}>
            <View style={styles.title}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  style={styles.avatar}
                  source={{ uri: users[listAvatar(users)].image }}
                ></Image>
                <View style={{ paddingLeft: 5 }}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "white",
                      paddingLeft: 5,
                    }}
                  >
                    {users[listName(users)].name}
                  </Text>
                </View>
              </View>
              <TouchableOpacity>
                <Feather
                  name="more-vertical"
                  style={{ color: "white", fontSize: 20 }}
                ></Feather>
              </TouchableOpacity>
            </View>
            <View
              style={{
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={styles.image}
                source={{ uri: newsItem.url }}
              ></Image>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 12,
                paddingVertical: 20,
              }}
            >
              <View style={styles.containerIcon}>
                <TouchableOpacity onPress={() => likedCheked(newsItem)}>
                  <AntDesign
                    name={newsItem.isLiked ? "heart" : "hearto"}
                    style={{
                      paddingRight: 10,
                      fontSize: 20,
                      color: newsItem.isLiked ? "red" : "white",
                    }}
                  ></AntDesign>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{ fontSize: 20, color: "white", paddingRight: 7 }}
                  ></Ionic>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    name="navigation"
                    style={{ fontSize: 20, color: "white" }}
                  ></Feather>
                </TouchableOpacity>
              </View>
              <TouchableOpacity>
                <Feather
                  name="bookmark"
                  style={{ fontSize: 20, color: "white" }}
                ></Feather>
              </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 15 }}>
              <Text style={{ fontSize: 15, color: "white" }}>
                Понравилось{" "}
                <Text style={{ color: "#1E90FF", fontWeight: "bold" }}>
                  {newsItem.likes}
                </Text>{" "}
                пользователям
              </Text>
              <Text
                style={{
                  opacity: 0.4,
                  paddingVertical: 2,
                  color: "white",
                  marginTop: 5,
                  marginBottom: 10,
                }}
              >
                Показать все комментарии
              </Text>
            </View>
            <View
              style={{
                marginLeft: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={{ uri: users[listAvatarBottom(users)].image }}
                  style={{
                    width: 25,
                    height: 25,
                    borderRadius: 100,
                    backgroundColor: "#1E90FF",
                    marginRight: 10,
                  }}
                ></Image>
                <TextInput
                  placeholder="Оставить комментарий"
                  placeholderTextColor="gray"
                  style={{ opacity: 1, padding: 10, color: "white" }}
                ></TextInput>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo
                  name="emoji-happy"
                  style={{ fontSize: 15, color: "#1E90FF", marginRight: 15 }}
                ></Entypo>
                <Entypo
                  name="emoji-neutral"
                  style={{ fontSize: 15, color: "pink", marginRight: 15 }}
                ></Entypo>
                <Entypo
                  name="emoji-sad"
                  style={{ fontSize: 15, color: "red", marginRight: 15 }}
                ></Entypo>
              </View>
            </View>
          </View>
        );
      })}
    </IOScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    borderBottomColor: "white",
    borderBottomWidth: 0.2,
  },
  title: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  image: {
    width: "100%",
    height: 350,
  },
  containerIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
});
