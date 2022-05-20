import { AuthState } from './AuthContext';

type AuthAction =
    | { type: 'signIn' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'logout' }
    | { type: 'changeUserName', payload: string };

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'No User',
            };
        case 'changeFavIcon':
            return {
                ...state,
                isLoggedIn: true,
                username: 'No User',
                favoriteIcon: action.payload
            };
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            };
        case 'changeUserName':
            return {
                ...state,
                username: action.payload
            }

        default:
            return state;
    }
}