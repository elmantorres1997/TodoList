import React from "react";
import { connect } from "react-redux";
import { refreshList, deleteTodo, completeTodo} from "../todo/Todo.actions";

const TodoList = ({ todos, refreshList, deleteTodo, completeTodo }) => (
  <div>
    <button onClick={refreshList}>Refresh</button>
    <ul>
      {todos.map(todo => (
        <li key={todo.id} style={{ color: todo.completed? 'green': 'red' }}>
          {todo.text}
          {todo.completed ? "":<button key={todo.id+1} onClick={() => {completeTodo(todo.id)}}>Complete</button>}
          <button key={todo.id+2} onClick={() => {deleteTodo(todo.id)}}>Remove</button>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos.todos
});

function mapDispatchToProps(dispatch) {
  return {
    refreshList: () => dispatch(refreshList),
    deleteTodo: id => deleteTodo(id).then(dispatch(refreshList)),
    completeTodo: id => completeTodo(id).then(dispatch(refreshList))
  };
}
// const mapDispatchToProps = dispatch => ({
//   refreshList: () => dispatch(refreshList),
//   deleteTodo: () => deleteTodo(todo.id)
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
