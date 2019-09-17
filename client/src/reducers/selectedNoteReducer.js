import {
  SET_SELECTED_NOTE,
  UPDATE_BODY,
  UPDATE_TITLE,
  DELETE_NOTE,
  RESET_SELECTED_NOTE_PROPERTIES,
  STAR_NOTE,
  ARCHIVE_NOTE,
  UPDATE_SELECTED_NOTE
} from "../actions/types";

const initialState = {
  title: "",
  created_at: new Date(),
  updated_at: new Date(),
  archieved_at: "",
  deleted_at: "",
  starred: false,
  body: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_NOTE:
      return action.payload;
    case RESET_SELECTED_NOTE_PROPERTIES:
      return initialState;
    case UPDATE_BODY:
      return { ...state, body: action.payload };
    case UPDATE_TITLE:
      return { ...state, title: action.payload };
    case STAR_NOTE:
      return { ...state, starred: action.payload };
    case ARCHIVE_NOTE:
      const t = { ...state, archieved_at: action.payload };
      return t;
    case DELETE_NOTE:
      return action.payload;
    case UPDATE_SELECTED_NOTE:
      const updatedNote = action.payload;
      return { ...state, updatedNote };
    default:
      return state;
  }
}
