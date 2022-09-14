import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ChatItem from './ChatItem'

export default function Chat() {

  return (
    <View style={styles.chatsContainer}>
      <ChatItem></ChatItem>
    </View>
  )
}

const styles = StyleSheet.create({
  chatsContainer:{
    paddingHorizontal: 10,
    marginVertical: 25,
  },
})