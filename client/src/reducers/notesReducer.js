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
      return state.map((note, id) => {
        if (id !== updatedNote._id) {
          // This isn't the item we care about - keep it as-is
          return note;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...note,
          ...updatedNote
        };
      });
    default:
      return state;
  }
}
