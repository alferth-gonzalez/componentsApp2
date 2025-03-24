import React, { useState } from 'react'
import { Platform, Pressable, StyleSheet, Switch, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { Text } from 'react-native-gesture-handler';

interface Props {
  isOn: boolean;
  text?: string;

  onChange: (value: boolean) => void;
}

export const CustomSwitch = ( { isOn, text, onChange } : Props ) => {
  
  return (
    <Pressable onPress={ () => {
      onChange(!isOn)
    }}>
      <View style={styles.switchRow}>

        {
          text && ( <Text style={{ color: colors.text }}>{ text }</Text> )
        }

        <Switch
          thumbColor={ Platform.OS === 'android' ? colors.primary : '' }
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChange}
          value={isOn}
        />
      
      </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5
  }
})
