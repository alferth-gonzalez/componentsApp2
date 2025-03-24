import React, { useState } from 'react'
import { CustomView } from '../../components/ui/CustomView'
import { Switch } from 'react-native';
import { Card } from '../../components/ui/Card';
import { CustomSwitch } from '../../components/ui/CustomSwitch';

export const SwitchScreen = () => {
  
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [ state, setState ] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  })

  return (
    <CustomView style={{ marginTop: 100 }}>
      <Card>

        <CustomSwitch 
          isOn={ state.isActive }
          onChange={ ( value ) => setState({ ...state, isActive: value }) }
          text='Esta Activo?'
        />

        <CustomSwitch 
          isOn={ state.isHungry }
          onChange={ ( value ) => setState({ ...state, isHungry: value }) }
          text='Tiene hambre?'
        />

        <CustomSwitch 
          isOn={ state.isHappy }
          onChange={ ( value ) => setState({ ...state, isHappy: value }) }
          text='Es feliz?'
        />

      </Card>
    </CustomView>
  )
}
