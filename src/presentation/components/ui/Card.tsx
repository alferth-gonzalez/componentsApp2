import React, { PropsWithChildren, ReactNode } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'
import { colors } from '../../../config/theme/theme'

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>
  // children?: ReactNode
}

export const Card = ( { style, children } : Props ) => {
  return (
    <View style={[ 
      {
        backgroundColor: colors.cardBackground,
        borderRadius: 10,
        padding: 10,
      },
      style,
    ]}>
      {
        children
      }
    </View>
  )
}
