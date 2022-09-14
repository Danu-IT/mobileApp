import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'

import Footer from '../Components/Footer/Footer';

import Search from '../Components/Search';
import photo from '../utils/photo'
import ImageContent from '../Components/ImageContent';

export default function Photos({navigation}) {


  return (
    <View style={styles.container}>
      <Search></Search>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <ImageContent photos={photo}></ImageContent>
      </ScrollView>
      <Footer navigation={navigation}></Footer>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1C1C1C',
      flex: 1,
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    wrapper:{
      flex: 1,
      marginHorizontal: 10,
      marginVertical: 10,
    }
  })