import React from "react";
import { connect } from "react-redux";
import { refreshList, deleteTodo} from "../todo/Todo.actions";

const TodoList = ({ todos, refreshList, deleteTodo }) => (
  <div>
    <button onClick={refreshList}>Refresh</button>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          <button key={todo.id} onClick={() => {deleteTodo(todo.id)}}>Remove</button>
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
    deleteTodo: id => deleteTodo(id).then(dispatch(refreshList))
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
