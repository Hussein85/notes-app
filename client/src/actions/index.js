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
  UPDATE_TITLE,
  UPDATE_BODY,
  RESET_SELECTED_NOTE_PROPERTIES,
  ARCHIVE_NOTE,
  STAR_NOTE,
  UPDATE_SELECTED_NOTE
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
  let url = "/api/edit/";
  const res = await axios.put(url.concat(updatedNote._id), updatedNote);

  dispatch({ type: EDIT_NOTE, payload: res.data });
};

/*
export const deleteNote = _id => async dispatch => {
  const url = "/api/delete/";
  await axios.delete(url.concat(_id));

  dispatch({ type: DELETE_NOTE, payload: _id });
};*/

// SELECTED NOTE REDUCER

export const deleteNote = note => async dispatch => {
  note.deleted_at = new Date();
  let url = "/api/edit/";
  const res = await axios.put(url.concat(note._id), note);

  dispatch({ type: DELETE_NOTE, payload: res.data });
};

export const updateSelectedNote = updatedNote => async dispatch => {
  let url = "/api/edit/";
  const res = await axios.put(url.concat(updatedNote._id), updatedNote);

  dispatch({ type: EDIT_NOTE, payload: res.data });
  dispatch({ type: UPDATE_SELECTED_NOTE, payload: res.data });
};

export const archiveNote = archieved_at => async dispatch => {
  console.log("action creator: ", archieved_at);
  dispatch({ type: ARCHIVE_NOTE, payload: archieved_at });
};

export const updateStarred = bool => dispatch => {
  dispatch({ type: STAR_NOTE, payload: bool });
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
