import { ADD_TODO, DELETE_TODO, LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./Todo.types"

const initialState = {
    loading: false,
    todos: [],
}

function todos(state = initialState, action = null) {
    switch (action.type) {
        case LIST_LOAD_REQUEST:
            return {
                ...state,
                loading: true,
            }

        case LIST_LOAD_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case LIST_LOAD_SUCCESS:
            return {
                ...state,
                todos: action.payload,
                loading: false,
            }

        case ADD_TODO:
            // copyList = state.list.slice();
            return Object.assign({}, state, {
                todos: state.todos.concat(action.payload),
                loading: false,
            })

        case DELETE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.concat(action.payload),
                loading: false,
            })

        default:
            return state
    }
}

export default todos
