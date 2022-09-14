import React from "react";
import {
  TouchableOpacity,
  Image,
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

import Footer from "../Components/Footer/Footer";
import News from "../Components/News";
import Stories from '../Components/Stories'
import { auth } from "../utils/firebse";

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.chats}>
        <Stories navigation={navigation}></Stories>
        <News></News>
      </ScrollView>
      <Footer navigation={navigation}></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1C1C1C",
    flex: 1,
  },
  chats: {
    flex: 1,
  },
});
