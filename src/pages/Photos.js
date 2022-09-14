import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import React, {useState, useEffect} from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionic from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'

import Footer from '../Components/Footer/Footer';

import Search from '../Components/Search';
import photo from '../utils/photo'
import ImageContent from '../Components/ImageContent';

export default function Photos({navigation}) {
  const [image, setImage] = useState(null);

  const getData = (data) => {
    setImage(data)
  }

  const windowWidth = Dimensions.get('window').width
  const windowHeight = Dimensions.get('window').height
  return (
    <View style={styles.container}>
      <Search></Search>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
        <ImageContent data={getData} photos={photo}></ImageContent>
        <TouchableOpacity style={{margin: 25, justifyContent: 'center', alignItems: 'center'}}>
          <AntDesign style={{fontSize: 40, color: 'white'}} name='pluscircleo'></AntDesign>
        </TouchableOpacity>
      </ScrollView>
      {
        image ?
        (
          <View style={{ position: 'relative', zIndex: 1, width: '100%', height: '100%'}}>
            <View style={{
              position: 'absolute',
              top: windowHeight / 14,
              left: windowWidth / 14,
              backgroundColor: 'white',
              width: 350,
              height: 465,
              borderRadius: 15,
              zIndex: 2,
              elevation: 50
            }}>
              <View style={{flexDirection: 'row', alignItems: 'center',  paddingVertical: 10, paddingHorizontal: 15}}>
                <Image source={{uri: image}} style={{width: 30, height: 30, borderRadius: 100, marginRight: 10}}></Image>
                <View>
                  <Text style={{fontSize: 12, fontWeight: '600'}}>
                    anonim
                  </Text>
                </View>
              </View>
              <Image source={{uri: image}} style={{width: '100%', height: '80%'}}></Image>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', width: '100%', alignItems: 'center', padding: 8}}>
                <Ionic style={{fontSize: 26}} name='ios-heart-outline'></Ionic>
                <Ionic style={{fontSize: 26}} name='ios-person-circle-outline'></Ionic>
                <Feather style={{fontSize: 26}} name='navigation'></Feather>
              </View>
            </View>
          </View>
        ) : null
      }
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