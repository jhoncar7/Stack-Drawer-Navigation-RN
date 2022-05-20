import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screen/Tab1Screen';
import { Tab2Screen } from '../screen/Tab2Screen';
import { Tab3Screen } from '../screen/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{ backgroundColor: colores.primary }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    console.log('JHON : -> ', route.name);
                    switch (route.name) {
                        case 'Tab1':
                            iconName = 'account-eye';
                            break;
                        case 'Tab2':
                            iconName = 'airplane';
                            break;
                        case 'Tab3':
                            iconName = 'alarm-bell';
                            break;
                    }
                    return <MaterialCommunityIcons name={iconName} size={20} color='black' />
                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1" options={{ title: 'Hola' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2" component={TopTabNavigator} />
            <BottomTabAndroid.Screen name="Tab3" component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colores.primary,
                headerShown: false,
                tabBarStyle: {
                    //borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: 'transparent',//IOS
                },
                headerStyle: {
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    console.log('JHON : -> ', route.name);
                    switch (route.name) {
                        case 'Tab1':
                            iconName = 'T1';
                            break;
                        case 'Tab2':
                            iconName = 'T2';
                            break;
                        case 'Tab3':
                            iconName = 'T3';
                            break;
                    }
                    return <MaterialCommunityIcons name="account-eye" size={50} color={colores.primary} />
                }
            })}

        >
            {/* <Tab.Screen name="Tab1" options={{title:'Hola', tabBarIcon:iconTab1}} component={Tab1Screen} /> */}
            <BottomTabIOS.Screen name="Tab1" options={{ title: 'Hola' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2" component={TopTabNavigator} />
            <BottomTabIOS.Screen name="Tab3" component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}

/* const iconTab1 = (props:any) => {
    return(
        <Text style={{color:props.color}}>T1</Text>
    )
} */

/* 

screenOptions={{
                tabBarActiveTintColor: colores.primary,
                headerShown: false,
                tabBarStyle: {
                    //borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                    shadowColor: 'transparent',
                },
                headerStyle: {
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                },
                tabBarIcon: ( props ) => {
                    console.log({props});
                    return <Text style={{color:'blue'}}>T1</Text>
                }
            }}
*/