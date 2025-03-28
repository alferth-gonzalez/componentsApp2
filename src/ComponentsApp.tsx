import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Navigator } from './presentation/navigator/Navigator';

export const ComponentsApp = () => {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  )
}
