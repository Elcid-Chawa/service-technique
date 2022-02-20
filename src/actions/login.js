import { _getUser } from '../utils/_DATA'

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT = 'LOGOUT'

export function login(authedUser){
    return {
        type: LOGIN_USER,
        isLoggedin: true,
        payload: authedUser
    }
}

export function logout(authedUser) {
    return {
        type: LOGOUT,
        isLoggedin: false,
        payload: authedUser
    }
}


export function handleLogin(authedUser) {
    return (dispatch) => {
        _getUser(authedUser).then((user) => {
            dispatch(login(user))
        })
    }
}

export function handleLogout(authedUser) {
    return (dispatch) => {
        _getUser(authedUser).then((user) => {
            dispatch(logout(user))
        })
    }
}