import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


export default function ImageCustom({url}) {
  return (
    <View>
      <Image source={{uri: url}} style={{width: 50, height: 50, borderRadius: '50%',borderColor: '#1E90FF', borderWidth: 2}}></Image>
    </View>
  )
}

const styles = StyleSheet.create({})