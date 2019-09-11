import { SET_MODE, VIEW_MODE } from "../actions/types";

const initialState = VIEW_MODE;

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_MODE:
      return action.payload;
    default:
      return state;
  }
}
