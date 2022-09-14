import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";
import { auth } from "../utils/firebse";

import Footer from "../Components/Footer/Footer";

export default function Conversation({ navigation }) {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginPage");
      })
      .catch((error) => {
        console.log("error");
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chats}>
      <Text style={{color: 'white', marginHorizontal: 10, marginVertical: 10,fontSize: 15}}>Email: <Text style={{color: "#1E90FF"}}>{auth.currentUser?.email}</Text></Text>
        <TouchableOpacity>
          <Button onPress={handleSignOut} title="Выйти" />
        </TouchableOpacity>
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
});
