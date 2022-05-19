import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { MenuLateral } from './src/navigator/MenuLateral';
import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import { StackNavigator } from './src/navigator/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <MenuLateral />
      {/* <MenuLateralBasico/> */}
      {/* <StackNavigator /> */}
    </NavigationContainer>
  )
}

export default App;