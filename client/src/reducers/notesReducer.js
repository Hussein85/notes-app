import {
  FETCH_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NOTES:
      return action.payload;
    case ADD_NOTE:
      const note = action.payload;
      return [note, ...state];
    case DELETE_NOTE:
      return state.filter(note => {
        return note._id !== action.payload;
      });
    case EDIT_NOTE:
      const updatedNote = action.payload;

      const updatedNotes = state.map((note, id) => {
        if (note._id !== updatedNote._id) {
          return note;
        }
        return {
          ...note,
          ...updatedNote
        };
      });

      return updatedNotes;
    default:
      return state;
  }
}
