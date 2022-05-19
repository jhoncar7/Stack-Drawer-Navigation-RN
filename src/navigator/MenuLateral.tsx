import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingScreen } from '../screen/SettingScreen';
import { StackNavigator } from './StackNavigator';
import { Image, Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const MenuLateral = () => {

    const { height, width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                //drawerPosition: 'right',
                drawerType: (width >= 600 ? 'permanent' : 'slide'),
                headerShown: false,
            }}
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="StackNaviga" component={StackNavigator} />
            <Drawer.Screen name="Settings" component={SettingScreen} />
        </Drawer.Navigator >
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/* Parte del avatar */}
            <View style={styles.avatarContainer}>
                <Image
                    source={require('../../foto.jpeg')}
                    /* source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJDqBszV_zvs_4ivjdxakIem3jRv9NRl5E8rdXqYYgZoosS8VVi6TVLpmZeqgbdw7qlc&usqp=CAU' }}*/
                    style={styles.avatar}
                />
            </View>

            {/* Opciones del menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuBtn}
                    onPress={() => navigation.navigate('StackNaviga')}
                >
                    <Text style={styles.menuText}>Navegacion Stack</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuBtn}
                    onPress={() => navigation.navigate('Settings')}
                >
                    <Text style={styles.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}