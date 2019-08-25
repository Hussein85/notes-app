import React, { Component } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

import { connect } from "react-redux";
import { fetchTodos, addTodo } from "../actions";
import "./TodoList.css";

class TodoList extends Component {
  constructor() {
    super();
    this.state = { editing: false };
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  addTodo = todo => {
    this.props.addTodo(todo);
  };

  renderTodoList() {
    const { todos } = this.props;

    let viewStyle = {};
    let editStyle = {};

    if (this.state.editing) {
      viewStyle.display = "none";
    } else {
      editStyle.display = "none";
    }

    return (
      todos &&
      todos.map(todo => {
        return <Todo key={todo._id} todo={todo} />;
      })
    );
  }

  render() {
    const { todos } = this.props;
    return (
      <div>
        <div className="addTodo">
          <AddTodo addTodo={this.addTodo} />
        </div>
        <div className={todos.length > 0 ? "collection" : "hidden"}>
          {this.renderTodoList()}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

export default connect(
  mapStateToProps,
  { fetchTodos, addTodo }
)(TodoList);
