import axios from "axios";
import {
  FETCH_USER,
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO
} from "./types";

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user");

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchTodos = () => async dispatch => {
  const res = await axios.get("/api/todos");

  dispatch({ type: FETCH_TODOS, payload: res.data });
};

export const addTodo = todo => async dispatch => {
  const res = await axios.post("/api/todos", todo);

  dispatch({ type: ADD_TODO, res });
};

export const deleteTodo = _id => async dispatch => {
  const url = "/api/delete/";
  await axios.delete(url.concat(_id));

  dispatch({ type: DELETE_TODO, _id });
};

export const editTodo = updatedTodo => async dispatch => {
  let url = "/api/edit/";
  let newContent = {};
  newContent["content"] = updatedTodo.content;

  const res = await axios.put(url.concat(updatedTodo._id), newContent);

  dispatch({ type: EDIT_TODO, res });
};
