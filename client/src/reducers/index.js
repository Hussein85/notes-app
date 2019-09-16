import { combineReducers } from "redux";
import notesReducer from "./notesReducer";
import selectedNoteReducer from "./selectedNoteReducer";
import modeReducer from "./modeReducer";
import visibilityFilterReducer from "./visibilityFilterReducer";
import searchTermReducer from "./searchTermReducer";

export default combineReducers({
  notes: notesReducer,
  selectedNote: selectedNoteReducer,
  mode: modeReducer,
  visibilityFilter: visibilityFilterReducer,
  searchTerm: searchTermReducer
});
