import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

import Stories from '../Components/Stories';
import Chat from '../Components/Chat/Chat';
import Footer from '../Components/Footer/Footer'

export default function Conversation({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.chats}>
        <Stories navigation={navigation}></Stories>
        <Chat></Chat>
      </ScrollView>
      <Footer navigation={navigation}></Footer>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1C1C1C',
      flex: 1,
    },
    chats:{
      flex: 1,
    }
  })