import React, { Component } from "react";
import { deleteTodo, editTodo } from "../actions";
import { connect } from "react-redux";

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
    let updatedContent = event.target.value;
    const todo = this.props.todo;
    todo.content = updatedContent;
    this.props.editTodo(todo, updatedContent);
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
          <label>
            <input
              onClick={() => {
                this.deleteTodo(todo._id);
              }}
              className="with-gap"
              name="group3"
              type="radio"
            />
            <span>{todo.content}</span>
          </label>

          <button
            onClick={this.handleEditing.bind(this)}
            className="btn-floating btn-small blue right"
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
