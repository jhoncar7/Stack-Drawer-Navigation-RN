import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screen/ChatScreen';
import { ContactsScreen } from '../screen/ContactsScreen';
import { AlbumsScreen } from '../screen/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import {  } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets();

    return (
        <Tab.Navigator
            style={{ paddingTop: top }}
            sceneContainerStyle={{ backgroundColor: 'white' }}// color de la pantalla screen total
            screenOptions={({ route }) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,//para guardar espacio para un icono cuando se quiera colocar
                tabBarIndicatorStyle: { backgroundColor: colores.primary },//para el color del la raya
                tabBarStyle: {
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: 'transparent',//IOS
                 },//para el color de la barra
                 tabBarIcon: ({ color, focused,  }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'chat-processing-outline';
                            break;
                        case 'Contacts':
                            iconName = 'account-switch-outline';
                            break;
                        case 'Albums':
                            iconName = 'image-album';
                            break;
                    }
                    return <MaterialCommunityIcons name={iconName} size={20} color='black' />
                }
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}