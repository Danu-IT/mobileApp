import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

export default function ImageContent({photos}) {

  return (
    <View style={{marginTop: 10, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      {photos.map((el, index) => {
        return (
          <>
            {el.id === 0 ?
            (
              <View style={{flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'space-between'}}>
                {el.images.map(elImage => {
                  return (
                    <TouchableOpacity style={{paddingBottom: 2}}>
                      <Image style={{width: 129, height: 150}} source={{uri: elImage}}></Image>
                    </TouchableOpacity>
                  )
                })}
              </View>
            )  : null}
            {
              el.id === 1 ? 
              (
                <View style={{marginLeft: 1,flexDirection: 'row', justifyContent:'space-between'}}>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', width: 261, justifyContent:'space-between'}}>
                    {el.images.slice(0, 4).map(elImage => {
                      return (
                        <TouchableOpacity style={{paddingBottom: 2}}>
                          <Image style={{width: 129, height: 150}} source={{uri: elImage}}></Image>
                        </TouchableOpacity>
                      )
                    })}
                  </View>
                  <View>
                    <TouchableOpacity style={{marginLeft: 3}}>
                      <Image source={{uri: el.images[5]}} style={{width: 129, height: 300,}}></Image>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : 
              null
            }
            {
              el.id === 2 ?
              (
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}>
                  <TouchableOpacity style={{marginLeft: 2}}>
                    <Image style={{width: 260, height: 300}} source={{uri: el.images[1]}}></Image>
                  </TouchableOpacity>
                  <View style={{flexDirection: 'row', flexWrap: 'wrap', width: 130, justifyContent: 'space-between'}}>
                    {el.images.slice(0, 2).map(elImage => {
                      return (
                        <TouchableOpacity style={{paddingBottom: 2, marginLeft: 2}}>
                          <Image source={{uri: elImage}} style={{width: 129, height: 150}}></Image>
                        </TouchableOpacity>
                      )
                    })}
                  </View>
                </View>
              ) : null
            }
            
          </>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({})