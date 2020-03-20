import {LOGOUT_USER_SUCCESS, LOGIN_USER_REQUEST,LOGIN_USER_ERROR, LOGIN_USER_SUCCESS} from "./Auth.types"
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const initialState = {
  authError: null,
  loading: false,
};

const authReducer = (state = initialState, action = null) => {
  switch (action.type) {
      case LOGIN_USER_ERROR:
          console.log("Login Failed")
          return {
              ...state,
              authError: 'Login Failed',
              loading: false
          };
      case LOGIN_USER_SUCCESS: 
            console.log("Login Success!")
            return { 
              ...state, 
              authError: null
          };
      case LOGOUT_USER_SUCCESS:
            console.log("signout Success")
            return {
              state,
              loading: false
          };
      case LOGIN_USER_REQUEST:
            console.log("Requesting")
            return {
              ...state,
              loading: true
          };
      default:
          return state
  }
}

const reducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer
});

export default reducer;

