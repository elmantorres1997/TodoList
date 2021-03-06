import { ADD_TODO, LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./Todo.types"
import TodoServiceImpl from "../../../domain/usecases/TodoService"
import AuthServiceImpl from "../../../domain/usecases/AuthService"
import TodoRepositoryFirebaseImpl from "../../../data/repositories/TodoRepositoryFirebaseImpl"
import AuthRepositoryFirebaseImpl from "../../../data/repositories/AuthRepositoryFirebaseImpl"

export const refreshList = async dispatch => {
    dispatch({ type: LIST_LOAD_REQUEST })

    try {
        const todoRepo = new TodoRepositoryFirebaseImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todos = await todoService.GetTodo()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: todos })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}

export const addTodo = async payload => {
    try {
        const today = new Date()
        const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
        const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        const dateTime = date + " " + time

        const text = payload.text
        payload = { id: dateTime, text, completed: false }
        const todoRepo = new TodoRepositoryFirebaseImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.AddTodo(payload)
        return { type: ADD_TODO, id: dateTime, payload }
    } catch (error) {
        alert(error)
    }
}

export const deleteTodo = async todo => {
    try {
        const todoRepo = new TodoRepositoryFirebaseImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.DeleteTodo(todo)
    } catch (error) {
        alert(error)
    }
}

export const completeTodo = async id => {
    const todoRepo = new TodoRepositoryFirebaseImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    await todoService.CompleteTodo(id)
}

export const signup = async userData => {
    const AuthRepo = new AuthRepositoryFirebaseImpl()
    const AuthService = new AuthServiceImpl(AuthRepo)
    await AuthService.Signup(userData)
}

export const login = async userData => {
    const AuthRepo = new AuthRepositoryFirebaseImpl()
    const AuthService = new AuthServiceImpl(AuthRepo)
    await AuthService.Login(userData)
}
