import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { firebaseApp } from "./data/repositories/firestore"

import authreducers from "./app/pages/auth/Auth.reducers"


import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

// Setup Redux store with Thunks
const store = createStore(authreducers, 
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebaseApp),
        reactReduxFirebase(firebaseApp, {attachAuthIsReady: true})
    )
);

store.firebaseAuthIsReady.then(()=>{

    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"))
    serviceWorker.unregister()
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

