import { SET_SEARCH_TERM } from "../actions/types";

const initialState = "";

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
}
