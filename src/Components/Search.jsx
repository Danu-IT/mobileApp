import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Ionic from 'react-native-vector-icons/Ionicons'

export default function Search() {
  return (
    <View style={styles.containerSearch}>
      <Ionic name='search' style={styles.icon}></Ionic>
      <TextInput placeholder='Search' placeholderTextColor='gray'></TextInput>
    </View>
  )
}

const styles = StyleSheet.create({
    containerSearch:{
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 5,
        position: 'relative',
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#EBEBEB',
        borderRadius: 10,
        paddingLeft: 40,
        marginHorizontal: 10 ,marginVertical: 10
    },
    icon:{
        fontSize: 18, 
        opacity: 0.7,
        position: 'absolute',
        zIndex: 1,
        left: 15,
        color: 'black'
    }
})