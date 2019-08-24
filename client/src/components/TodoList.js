import React, { Component } from "react";
import AddTodo from "./AddTodo";
import { connect } from "react-redux";
import { fetchTodos, addTodo, deleteTodo } from "../actions";
import "./TodoList.css";

class TodoList extends Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  addTodo = todo => {
    this.props.addTodo(todo);
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
  };

  renderTodoList() {
    const { todos } = this.props;
    return (
      todos &&
      todos.map(todo => {
        return (
          <div className="collection-item" key={todo._id}>
            <p>
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
            </p>
          </div>
        );
      })
    );
  }

  render() {
    const { todos } = this.props;
    console.log("todos: ", todos);
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

//function mapStateToProps(state) {
//  return { auth: state.auth };
//}

export default connect(
  mapStateToProps,
  { fetchTodos, addTodo, deleteTodo }
)(TodoList);
