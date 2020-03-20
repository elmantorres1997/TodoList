import * as types from "./Auth.types"
import { firebaseApp } from "../../../data/repositories/firestore"
import AuthServiceImpl   from "../../../domain/usecases/AuthService"
import AuthRepositoryFirebaseImpl from "../../../data/repositories/AuthRepositoryFirebaseImpl"

export const signup = (userData) => {
    const AuthRepo = new AuthRepositoryFirebaseImpl()
    const AuthService = new AuthServiceImpl(AuthRepo)
    AuthService.Signup(userData)
    return{
        type: types.REGISTER_USER,
        userData
    }
};

export const login =  (userData) => {
    return (dispatch) => {
        const AuthRepo = new AuthRepositoryFirebaseImpl()
        const AuthService = new AuthServiceImpl(AuthRepo)
        AuthService.Login(userData)
        .then(function() {
            firebaseApp.auth().onAuthStateChanged(function(user) {
                if (user != null) {
                    dispatch({type: types.LOGIN_USER_SUCCESS})
                } else {
                    dispatch({type: types.LOGIN_USER_ERROR, payload:"Login Error"  })
                }
              });   
            })
    }
};

export const signout = () => {
    return (dispatch) => {
        console.log("Logout Function")
        const AuthRepo = new AuthRepositoryFirebaseImpl()
        const AuthService = new AuthServiceImpl(AuthRepo)
        AuthService.Logout().then(function(){
            dispatch({type: types.LOGOUT_USER_SUCCESS})
        })
    }
};
