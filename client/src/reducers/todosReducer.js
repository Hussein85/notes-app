import { FETCH_TODOS, ADD_TODO, DELETE_TODO } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case ADD_TODO:
      const todo = action.res.data;
      return [...state, todo];
    case DELETE_TODO:
      console.log(action);
      return state.filter(todo => {
        return todo._id !== action._id;
      });
    default:
      return state;
  }
}
