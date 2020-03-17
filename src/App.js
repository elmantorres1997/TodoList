import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import TodoList from "./app/pages/todo/TodoListing"
import Formlist from "./app/pages/todo/FormList"
import todos from "./app/pages/todo/Todo.reducers"

// Setup Redux store with Thunks
const reducers = combineReducers({ todos })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        <Formlist />
        <TodoList />
    </Provider>
)

export default App
