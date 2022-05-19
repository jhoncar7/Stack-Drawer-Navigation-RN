import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { MenuLateral } from './src/navigator/MenuLateral';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { StackNavigator } from './src/navigator/StackNavigator';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <Tabs /> */}
      <MenuLateral />
      {/* <MenuLateralBasico/> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  )
}

export default App;