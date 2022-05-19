import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/appTheme';

export const SettingScreen = () => {

    const insets = useSafeAreaInsets();// custon hook donde separa o baja lo necesario para que se vea

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top
        }}>
            <Text style={styles.title}>Setting Screen</Text>
        </View>
    )
}
