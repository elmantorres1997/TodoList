import { DELETE_TODO, ADD_TODO, LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./Todo.types"
import TodoServiceImpl   from "../../../domain/usecases/TodoService"
import TodoRepositoryFirebaseImpl from "../../../data/repositories/TodoRepositoryFirebaseImpl"

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
    try{
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date+' '+time;

        var text = payload.text
        payload = {id: dateTime, text , completed: false}
        const todoRepo = new TodoRepositoryFirebaseImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.AddTodo(payload)
        return { type: ADD_TODO, id: dateTime, payload }
    } catch (error){
        alert(error)
    }
};

export const deleteTodo = async todo => {
    try{
        const todoRepo = new TodoRepositoryFirebaseImpl()
        const todoService = new TodoServiceImpl(todoRepo)
        await todoService.DeleteTodo(todo)
    } catch (error){
        alert(error)
    }
};

export const completeTodo = async id => {
    const todoRepo = new TodoRepositoryFirebaseImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    await todoService.CompleteTodo(id)
};

export const signupTodo = async userData => {
    const todoRepo = new TodoRepositoryFirebaseImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    await todoService.SignupTodo(userData)
};

export const loginTodo = async userData => {
    const todoRepo = new TodoRepositoryFirebaseImpl()
    const todoService = new TodoServiceImpl(todoRepo)
    await todoService.LoginTodo(userData)
};