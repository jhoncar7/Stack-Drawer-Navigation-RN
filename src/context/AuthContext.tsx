import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


// definir como luce, que informacion tender aqui
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//lo usaremos para decirle a React como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavIcon: (iconName: string) => void;
    logout: () => void;
    changeUserName: (userName: string) => void;
}

//crear el contexto, de lo que va a proporcionar a los hijos
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor del estado
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const changeFavIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const changeUserName = (userName: string) => {
        dispatch({ type: 'changeUserName', payload: userName });
    }

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                changeFavIcon,
                logout,
                changeUserName
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}