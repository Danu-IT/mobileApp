import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { auth } from "../../utils/firebse";

export default function LoginPage({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    return auth.onAuthStateChanged(user => {
      if(user){
        navigation.replace('HomePage')
      }
    })
  },[])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userNew => {
        const user = userNew.user;
        console.log('Зарегистрировались в системе: ',user.email);
      })
      .catch(error => {
        console.log(error)
      })
      setEmail("");
      setPassword('');
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userNew => {
        const user = userNew.user;
        console.log('Зашли в систему: ',user.email);
      })
      .catch(error => {
        if(error){
          Alert.alert('Введены неверные данные', 'Неверный логин или пароль')
        }
      })
      setEmail('');
      setPassword('');
  }

  const loadScene = () => {
    navigation.navigate("RegisterPage");
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={(handleLogin)} style={styles.button}>
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.buttonOutline]}
          onPress={(handleLogin)}
          title="Авторизация"
        >
          <Text onPress={(handleSignUp)} style={[styles.buttonText, styles.buttonOutlineText]}>
            Регистрация
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#1C1C1C',
  },
  inputContainer: {
    width: "70%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: "#1E90FF",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "70%",
  },
  button: {
    backgroundColor: "#1E90FF",
    borderColor: "#1E90FF",
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
  },
  buttonText: { fontSize: 16, color: "white" },
  buttonOutline: {
    backgroundColor: "yellow",
    borderColor: "#1E90FF",
    borderWidth: 2,
  },
  buttonOutlineText: {
    color: "#1E90FF",
  },
});
