import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { createStore, combineReducers, applyMiddleware } from "redux"
import { AuthProvider } from "./app/pages/todo/Auth";
import thunk from "redux-thunk"

import SignUp from "./app/pages/todo/SignUp"
import Home from "./app/pages/todo/Home"
import Login from "./app/pages/todo/Login"
import todos from "./app/pages/todo/Todo.reducers"
import PrivateRoute from "./app/pages/todo/PrivateRoute"


// Setup Redux store with Thunks
const reducers = combineReducers({ todos })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <AuthProvider>
        <Provider store={store}>
            <Router>
                <div>
                    <PrivateRoute exact path="/" component={Home}/>
                    <Route exact path="/signup" component={SignUp}/>
                    <Route exact path="/login" component={Login}/>
                </div>
            </Router>
        </Provider>
    </AuthProvider>
)

export default App
