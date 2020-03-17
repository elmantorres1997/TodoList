import React from "react";
import { connect } from "react-redux";
import { refreshList } from "./Todo.actions";

const ItemList = ({ todos, refreshList }) => (
  <div>
    <button onClick={refreshList}>Refresh</button>
    <ul>
      {todos.map(item => (
        <li key={item.id}>{item.text}</li>
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
)(ItemList);
