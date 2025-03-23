import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';


export const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Icon name="home-outline" size={30} color="#000" />
      <Ionicons name="home-outline" size={30} color="#000" />
    </View>
  )
}
