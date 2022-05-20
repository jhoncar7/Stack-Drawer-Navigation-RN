import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles, colores } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

  const { top } = useSafeAreaInsets();

  useEffect(() => {
    //console.log('Tab 1 Screen');
  }, [])

  return (
    <View style={{
      ...styles.globalMargin,
      marginTop: top + 20,
    }}>
      <Text style={styles.title}>Iconos</Text>
      <Text style={styles.title}>
        <TouchableIcon iconName="account-eye" />
        <TouchableIcon iconName="alarm-snooze" />
        <TouchableIcon iconName="application-brackets" />
        <TouchableIcon iconName="baseball" />
        <TouchableIcon iconName="battery-alert-variant-outline" />
      </Text>
    </View>
  )
}