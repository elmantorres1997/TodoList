import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import TodoList from "./app/pages/item/TodoList"
import Formlist from "./app/pages/item/FormList"
import todos from "./app/pages/item/Todo.reducers"

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
