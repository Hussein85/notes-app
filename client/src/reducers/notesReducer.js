import {
  FETCH_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  EDIT_NOTE,
  ARCHIVE_NOTE
  //STAR_NOTE
} from "../actions/types";

const updateNote = (state, updatedNote, property) => {
  const updatedNotes = state.map((note, id) => {
    if (note[property] !== updatedNote[property]) {
      return note;
    }
    return {
      ...note,
      ...updatedNote
    };
  });
  return updatedNotes;
};

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_NOTES:
      return action.payload;
    case ADD_NOTE:
      const note = action.payload;
      return [...state, note];
    case DELETE_NOTE:
      // TODO: it returns the whole array back. fix it.
      return state.filter(note => {
        return note._id !== action.payload;
      });
    case EDIT_NOTE:
      const updatedNote = action.payload;

      return updateNote(state, updatedNote, "_id");

    case ARCHIVE_NOTE:
      const archievedNote = action.payload;

      return updateNote(state, archievedNote, "archieved_at");

    default:
      return state;
  }
}
