import React, { Component } from "react";
import { deleteTodo, editTodo } from "../actions";
import { connect } from "react-redux";
import "./css/Todo.css";

class Todo extends Component {
  state = {
    editing: false,
    editText: this.props.todo.content
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  setEditText = text => {
    this.setState({ editText: text });
  };

  enableEditing = event => {
    this.setState({ editing: true });
  };

  handleEditingDone = event => {
    if (event.keyCode === 13) {
      this.setState({ editing: false });
      let updatedTodo = this.props.todo;
      updatedTodo.content = this.state.editText;
      this.props.editTodo(updatedTodo);
    }
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
            onClick={this.enableEditing}
            className="adjustButton btn-floating btn-small blue right"
          >
            <i className="large material-icons">mode_edit</i>
          </button>
        </p>
        <div style={editStyle}>
          <input
            onKeyDown={this.handleEditingDone.bind(this)}
            type="text"
            value={this.state.editText}
            onChange={e => {
              this.setEditText(e.target.value);
            }}
          />
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
  { deleteTodo, editTodo }
)(Todo);
