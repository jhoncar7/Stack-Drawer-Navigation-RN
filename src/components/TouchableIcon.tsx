import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
    iconName: string;
}

export const TouchableIcon = ({ iconName }: Props) => {

    const { changeFavIcon } = useContext(AuthContext);

    return (
        <TouchableOpacity
            onPress={() => {
                changeFavIcon(iconName);
            }}
        >
            <MaterialCommunityIcons name={iconName} size={50} color={colores.primary} />
        </TouchableOpacity>
    )
}
