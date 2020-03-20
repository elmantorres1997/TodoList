import * as types from "./Auth.types"
import AuthServiceImpl from "../../../domain/usecases/AuthService"
import AuthRepositoryFirebaseImpl from "../../../data/repositories/AuthRepositoryFirebaseImpl"

export const signup = userData => {
    return dispatch => {
        dispatch({ type: types.REGISTER_USER_REQUEST })
        const AuthRepo = new AuthRepositoryFirebaseImpl()
        const AuthService = new AuthServiceImpl(AuthRepo)
        AuthService.Signup(userData).then(function() {
            dispatch({
                type: types.REGISTER_USER_SUCCESS,
                userData,
            })
        })
    }
}

export const login = userData => {
    return dispatch => {
        dispatch({ type: types.LOGIN_USER_REQUEST })
        const AuthRepo = new AuthRepositoryFirebaseImpl()
        const AuthService = new AuthServiceImpl(AuthRepo)
        AuthService.Login(userData).then(function(value) {
            if (value === "LogedIn") {
                dispatch({ type: types.LOGIN_USER_SUCCESS })
            } else {
                dispatch({ type: types.LOGIN_USER_ERROR, payload: "Login Error" })
            }
        })
    }
}

export const signout = () => {
    return dispatch => {
        console.log("Logout Function")
        const AuthRepo = new AuthRepositoryFirebaseImpl()
        const AuthService = new AuthServiceImpl(AuthRepo)
        AuthService.Logout().then(function() {
            dispatch({ type: types.LOGOUT_USER_SUCCESS })
        })
    }
}
