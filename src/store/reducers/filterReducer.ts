import { TodoActionTypes, TodoFilter, UPDATE_FILTER } from "../types";

export const filterReducer = (
  state: TodoFilter = null,
  action: TodoActionTypes
): TodoFilter => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.payload;
    default:
      return state;
  }
};
