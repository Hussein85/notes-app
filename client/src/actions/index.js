import axios from "axios";
import {
  FETCH_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  SET_SELECTED_NOTE,
  SET_VISIBILITY_FILTER,
  SET_SEARCH_TERM,
  SET_MODE,
  RESET_SELECTED_NOTE_PROPERTIES,
  UPDATE_SELECTED_NOTE,
  EDIT_SELECTED_NOTE
} from "./types";

// NOTES REDUCER
export const addNote = note => async dispatch => {
  const res = await axios.post("/api/notes", note);

  dispatch({ type: ADD_NOTE, payload: res.data });
};

export const fetchNotes = () => async dispatch => {
  const res = await axios.get("/api/notes");

  dispatch({ type: FETCH_NOTES, payload: res.data });
};

export const editNote = updatedNote => async dispatch => {
  updatedNote.updated_at = new Date();
  const url = "/api/edit/";
  const res = await axios.put(url.concat(updatedNote._id), updatedNote);

  dispatch({ type: EDIT_NOTE, payload: res.data });
};

export const deleteNote = _id => async dispatch => {
  const url = "/api/delete/";
  await axios.delete(url.concat(_id));

  dispatch({ type: DELETE_NOTE, payload: _id });
};

// SELECTED NOTE REDUCER
export const updateSelectedNote = updatedNote => async dispatch => {
  const url = "/api/edit/";
  const res = await axios.put(url.concat(updatedNote._id), updatedNote);

  dispatch({ type: EDIT_NOTE, payload: res.data });
  dispatch({ type: UPDATE_SELECTED_NOTE, payload: res.data });
};

export const editSelectedNote = (prop, value) => async dispatch => {
  const obj = {};
  obj[prop] = value;
  dispatch({ type: EDIT_SELECTED_NOTE, payload: obj });
};

export const setSelectedNote = selectedNote => dispatch => {
  dispatch({ type: SET_SELECTED_NOTE, payload: selectedNote });
};

export const resetSelectedNoteProperties = () => dispatch => {
  dispatch({ type: RESET_SELECTED_NOTE_PROPERTIES, payload: "" });
};

// VISIBILITY MODE
export const setVisibilityFilter = filter => dispatch => {
  dispatch({ type: SET_VISIBILITY_FILTER, payload: filter });
};

// MODE
export const setMode = mode => dispatch => {
  dispatch({ type: SET_MODE, payload: mode });
};

// SEARCH TERM
export const setSearchTerm = term => dispatch => {
  dispatch({ type: SET_SEARCH_TERM, payload: term });
};
