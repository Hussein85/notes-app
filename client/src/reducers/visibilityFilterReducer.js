import { SHOW_ALL, SET_VISIBILITY_FILTER } from "../actions/types";

const initialState = SHOW_ALL;

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload;
    default:
      return state;
  }
}
