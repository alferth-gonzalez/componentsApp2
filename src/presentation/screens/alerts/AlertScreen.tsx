import React from 'react'
import { Alert } from 'react-native'
import { CustomView } from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/theme'
import { Button } from '../../components/ui/Button'
import { Separator } from '../../components/ui/Separator'

export const AlertScreen = () => {

  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    
  return (
    <CustomView style={ globalStyles.globalMargin }>
      <Title safe text="Alertas" />

      <Button 
        text='Alerta - 2 botones' 
        onPress={ createTwoButtonAlert }
      />

      <Separator/>

      <Button 
        text='Alerta - 3 botones' 
        onPress={ () => console.log('presiona') }
      />

      <Separator/>

      <Button 
        text='Prompt' 
        onPress={ () => console.log('presiona') }
      />
    </CustomView>
  )
}
