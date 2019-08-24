import axios from "axios";
import { FETCH_USER, FETCH_TODOS, ADD_TODO, DELETE_TODO } from "./types";

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

  const value = url.concat(_id);
  await axios.delete(value);

  dispatch({ type: DELETE_TODO, _id });
};
