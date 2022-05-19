import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingScreen } from '../screen/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {

    const { height, width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                //drawerPosition: 'right',
                drawerType: (width >= 600 ? 'permanent' : 'slide'),
                headerShown: false,
            }}
        >
            <Drawer.Screen name="StackNaviga" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="Settings" options={{ title: 'Settings' }} component={SettingScreen} />
        </Drawer.Navigator >
    );
}