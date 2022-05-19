import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screen/Tab1Screen';
import { Tab2Screen } from '../screen/Tab2Screen';
import { Tab3Screen } from '../screen/Tab3Screen';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab1" component={Tab1Screen} />
            <Tab.Screen name="Tab2" component={Tab2Screen} />
            <Tab.Screen name="Tab3" component={StackNavigator} />
        </Tab.Navigator>
    );
}