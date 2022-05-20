import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { AuthProvider } from './src/context/AuthContext';
import { MenuLateral } from './src/navigator/MenuLateral';
//import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
//import { StackNavigator } from './src/navigator/StackNavigator';
//import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <Tabs /> */}
        <MenuLateral />
        {/* <MenuLateralBasico/> */}
        {/* <StackNavigator /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;