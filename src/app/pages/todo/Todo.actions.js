import { DELETE_TODO, ADD_TODO, LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./Todo.types"
import TodoServiceImpl   from "../../../domain/usecases/TodoService"
import TodoRepositoryImpl from "../../../data/repositories/TodoRepositoryImpl"


export const refreshList = async dispatch => {
    dispatch({ type: LIST_LOAD_REQUEST })

    try {
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        const todos = await todoService.GetTodo()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: todos })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}

let todoID = 2;
export const addTodo = payload => {
    var text = payload.text
    payload = {id: ++todoID, text}
    console.log(payload)
    const todoRepo = new TodoRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    todoService.AddTodo(payload)
    return { type: ADD_TODO, id: todoID, payload }
};

export const deleteTodo = async id => {
    console.log(id)
    const todoRepo = new TodoRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    todoService.DeleteTodo(id)
};