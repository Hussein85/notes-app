import {
  FETCH_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_TODOS:
      return action.payload;
    case ADD_TODO:
      const todo = action.res.data;
      return [...state, todo];
    case DELETE_TODO:
      return state.filter(todo => {
        return todo._id !== action._id;
      });
    case EDIT_TODO:
      const updatedTodo = action.res.data;
      return state.map((todo, id) => {
        if (id !== updatedTodo._id) {
          // This isn't the item we care about - keep it as-is
          return todo;
        }
        // Otherwise, this is the one we want - return an updated value
        return {
          ...todo,
          ...updatedTodo
        };
      });
    default:
      return state;
  }
}
