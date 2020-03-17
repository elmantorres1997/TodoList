import React from "react";
import { connect } from "react-redux";
import { refreshList } from "../todo/Todo.actions";

const TodoList = ({ todos, refreshList }) => (
  <div>
    <button onClick={refreshList}>Refresh</button>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  todos: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
  refreshList: () => dispatch(refreshList)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
