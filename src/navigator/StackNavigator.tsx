import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Pagina1Screen } from "../screen/Pagina1Screen";
import { Pagina2Screen } from "../screen/Pagina2Screen";
import { Pagina3Screen } from "../screen/Pagina3Screen";
import { PersonaScreen } from '../screen/PersonaScreen';

export type RootStackParams = {
    Pagina1: undefined;
    Pagina2: undefined;
    Pagina3: undefined;
    Persona: {
        id: number,
        nombre: string
    },
}


const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            //initialRouteName="Pagina3"
            screenOptions={{
                cardStyle: {
                    backgroundColor: "#fff",
                },
                headerStyle: {
                    elevation: 0, //solo en ANDROID en IOS no sirve
                    shadowColor: "transparent", //solo en IOS
                },
                //headerShown: false,
            }}

        >
            <Stack.Screen name="Pagina1" options={{ title: 'Página 1' }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2" options={{ title: 'Página 2' }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3" options={{ title: 'Página 3' }} component={Pagina3Screen} />
            <Stack.Screen name="Persona" options={{ title: 'Persona' }} component={PersonaScreen} />
        </Stack.Navigator>
    )
}