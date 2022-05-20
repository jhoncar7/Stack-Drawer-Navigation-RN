import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Tab2Screen = () => {

  useEffect(() => {
    //console.log('Tab 2 Screen');
  },[])

  return (
    <View>
      <Text style={styles.title}>Tab 2</Text>
    </View>
  )
}
