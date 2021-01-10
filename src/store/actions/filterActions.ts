import { TodoActionTypes, TodoFilter, UPDATE_FILTER } from "../types";

export const updateFilterAction = (newFilter: TodoFilter): TodoActionTypes => ({
  type: UPDATE_FILTER,
  payload: newFilter,
});
