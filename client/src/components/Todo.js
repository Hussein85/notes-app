import React, { Component } from "react";
import { deleteTodo, editTodo } from "../actions";
import { connect } from "react-redux";
import "./css/Todo.css";

class Todo extends Component {
  constructor() {
    super();
    this.state = { editing: false };
  }

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  editTodo = () => {
    this.props.handleMarkEdit(this.props.id);
  };

  handleEditing = event => {
    this.setState({ editing: true });
  };

  handleEditingDone = event => {
    if (event.keyCode === 13) {
      this.setState({ editing: false });
    }
  };

  handleEditingChange = event => {
    let updatedTodo = this.props.todo;
    updatedTodo.content = event.target.value;
    this.props.editTodo(updatedTodo);
  };

  render() {
    const todo = this.props.todo;

    let viewStyle = {};
    let editStyle = {};

    if (this.state.editing) {
      viewStyle.display = "none";
    } else {
      editStyle.display = "none";
    }

    return (
      <div className="collection-item">
        <p style={viewStyle}>
          <span className="todoTitle">{todo.content}</span>
          <button
            onClick={() => {
              this.deleteTodo(todo._id);
            }}
            className="btn-floating btn-small red right"
          >
            <i className="large material-icons">delete</i>
          </button>
          <button
            onClick={this.handleEditing}
            className="adjustButton btn-floating btn-small blue right"
          >
            <i className="large material-icons">mode_edit</i>
          </button>
        </p>
        <input
          onKeyDown={this.handleEditingDone.bind(this)}
          style={editStyle}
          type="text"
          value={todo.content}
          onChange={this.handleEditingChange.bind(this)}
        />
      </div>
    );
  }
}

function mapStateToProps({ todos }) {
  return { todos };
}

export default connect(
  mapStateToProps,
  { deleteTodo, editTodo }
)(Todo);
