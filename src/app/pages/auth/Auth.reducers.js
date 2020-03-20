import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_REQUEST,
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGIN_USER_REQUEST,
    LOGIN_USER_ERROR,
    LOGIN_USER_SUCCESS,
} from "./Auth.types"
import { combineReducers } from "redux"
import { firebaseReducer } from "react-redux-firebase"

const initialState = {
    authError: null,
    loading: false,
    match: true,
}

const authReducer = (state = initialState, action = null) => {
    switch (action.type) {
        case LOGIN_USER_ERROR:
            console.log("Login Failed")
            return {
                ...state,
                authError: "Login Failed",
                loading: false,
                match: false,
            }
        case LOGIN_USER_SUCCESS:
            console.log("Login Success!")
            return {
                ...state,
                authError: null,
                loading: false,
                match: true,
            }
        case LOGOUT_USER_SUCCESS:
            console.log("signout Success")
            return {
                state,
                loading: false,
                match: true,
            }
        case LOGOUT_USER_REQUEST:
            console.log("Logout Request")
            return {
                state,
                loading: true,
                match: true,
            }
        case LOGIN_USER_REQUEST:
            console.log("Login Request")
            return {
                ...state,
                loading: true,
            }

        case REGISTER_USER_REQUEST:
            console.log("Register Request")
            return {
                state,
                loading: true,
                match: true,
            }

        case REGISTER_USER_SUCCESS:
            console.log("Register Success")
            return {
                state,
                loading: true,
                match: true,
            }
        default:
            return state
    }
}

const reducer = combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
})

export default reducer
