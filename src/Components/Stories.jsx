import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import users from '../utils/users'
import ImageCustom from "./ImageCustom";


export default function Stories({ navigation }) {

  return (
    <ScrollView horizontal={true} style={styles.stories}>
      <TouchableOpacity style={styles.addContainer}>
        <View style={styles.addStories}>
          <Text style={styles.addStoriesText}>+</Text>
        </View>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
      {users.map((story) => {
        return (
          <TouchableOpacity key={users.id} onPress={() => navigation.navigate('Status', {story: story})} style={styles.addContainer}>
            <ImageCustom url={story.image}></ImageCustom>
            <Text style={styles.addText}>{story.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addContainer: {
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  stories: {
    marginVertical: 20,
    flexDirection: "row",
    borderBottomColor: 'gray',
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  addStories: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: "50%",
    color: "#1E90FF",
  },
  addStoriesText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  addText: {
    marginTop: 6,
    color: "white",
  },
});
