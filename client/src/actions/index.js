import axios from "axios";
import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from "./types";

export const fetchNotes = () => async dispatch => {
  const res = await axios.get("/api/notes");

  dispatch({ type: FETCH_NOTES, payload: res.data });
};

export const addNote = note => async dispatch => {
  console.log("action create ", note);
  const res = await axios.post("/api/notes", note);

  dispatch({ type: ADD_NOTE, res });
};

export const deleteNote = _id => async dispatch => {
  const url = "/api/delete/";
  await axios.delete(url.concat(_id));

  dispatch({ type: DELETE_NOTE, _id });
};

export const editNote = updatedNote => async dispatch => {
  let url = "/api/edit/";
  let newBody = {};
  newBody["body"] = updatedNote.body;

  const res = await axios.put(url.concat(updatedNote._id), newBody);

  dispatch({ type: EDIT_NOTE, res });
};
