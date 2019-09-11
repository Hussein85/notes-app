import { SET_SELECTED_NOTE } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_NOTE:
      return action.payload;
    default:
      return state;
  }
}
