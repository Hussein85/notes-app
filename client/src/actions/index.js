import axios from "axios";
import {
  FETCH_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  SET_SELECTED_NOTE,
  SET_VISIBILITY_FILTER,
  SET_MODE,
  UPDATE_TITLE,
  UPDATE_BODY,
  RESET_SELECTED_NOTE_PROPERTIES
} from "./types";

export const fetchNotes = () => async dispatch => {
  const res = await axios.get("/api/notes");

  dispatch({ type: FETCH_NOTES, payload: res.data });
  dispatch({ type: SET_SELECTED_NOTE, payload: res.data[0] });
};

export const addNote = note => async dispatch => {
  const res = await axios.post("/api/notes", note);

  dispatch({ type: ADD_NOTE, payload: res.data });
};

export const deleteNote = _id => async dispatch => {
  const url = "/api/delete/";
  await axios.delete(url.concat(_id));

  dispatch({ type: DELETE_NOTE, payload: _id });
};

export const editNote = updatedNote => async dispatch => {
  let url = "/api/edit/";
  const res = await axios.put(url.concat(updatedNote._id), updatedNote);

  dispatch({ type: EDIT_NOTE, payload: res.data });
};

export const setSelectedNote = selectedNote => dispatch => {
  dispatch({ type: SET_SELECTED_NOTE, payload: selectedNote });
};

export const updateTitle = title => dispatch => {
  dispatch({ type: UPDATE_TITLE, payload: title });
};

export const updateBody = body => dispatch => {
  dispatch({ type: UPDATE_BODY, payload: body });
};

export const resetSelectedNoteProperties = () => dispatch => {
  dispatch({ type: RESET_SELECTED_NOTE_PROPERTIES, payload: "" });
};

export const setVisibilityFilter = filter => dispatch => {
  dispatch({ type: SET_VISIBILITY_FILTER, payload: filter });
};

export const setMode = mode => dispatch => {
  dispatch({ type: SET_MODE, payload: mode });
};
