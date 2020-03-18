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
export const addTodo = async payload => {
    try{
        var text = payload.text
        payload = {id: ++todoID, text , completed: false}
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.AddTodo(payload)
        return { type: ADD_TODO, id: todoID, payload }
    } catch (error){
        alert(error)
    }
};

export const deleteTodo = async todo => {
    try{
        const todoRepo = new TodoRepositoryImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.DeleteTodo(todo)
    } catch (error){
        alert(error)
    }
};

export const completeTodo = async id => {
    console.log(id)
    const todoRepo = new TodoRepositoryImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    await todoService.CompleteTodo(id)
};