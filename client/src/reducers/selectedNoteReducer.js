import {
  SET_SELECTED_NOTE,
  DELETE_NOTE,
  RESET_SELECTED_NOTE_PROPERTIES,
  EDIT_SELECTED_NOTE
} from "../actions/types";

const initialState = {
  title: "",
  created_at: new Date(),
  updated_at: new Date(),
  archieved_at: null,
  deleted_at: null,
  starred: false,
  body: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_NOTE:
      const selectedNote = action.payload;
      return { ...selectedNote };
    case RESET_SELECTED_NOTE_PROPERTIES:
      return initialState;
    case DELETE_NOTE:
      return action.payload;
    case EDIT_SELECTED_NOTE:
      const prop = action.payload;
      return { ...state, ...prop };
    default:
      return state;
  }
}
