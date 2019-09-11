import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import selectedNoteReducer from "./selectedNoteReducer";
import modeReducer from "./modeReducer";

export default combineReducers({
  notes: notesReducer,
  selectedNote: selectedNoteReducer,
  mode: modeReducer
});
