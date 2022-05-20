import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { colores, styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const SettingScreen = () => {

    const insets = useSafeAreaInsets();// custon hook donde separa o baja lo necesario para que se vea
    const { authState } = useContext(AuthContext);

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top
        }}>
            <Text style={styles.title}>Setting Screen</Text>
            <Text style={styles.title}>{JSON.stringify(authState, null, 4)} </Text>

            {
                authState.favoriteIcon
                &&
                <MaterialCommunityIcons name={authState.favoriteIcon} size={50} color={colores.primary} />
            }

        </View>
    )
}
