import { createSelector } from "reselect";
import { Todo, TodoFilter, TodoState } from "../types";
import { todosSelector } from "./todosSelector";

export const filterSelector = (state: TodoState): TodoFilter => state.filter;

export const filteredTodosSelector = createSelector(
  todosSelector,
  filterSelector,
  (todos: Todo[], filter: TodoFilter) => {
    if (filter === null) {
      return todos;
    }

    return todos.filter((todo: Todo) => todo.completed === filter);
  }
);

/**
export const filteredTodosSelector = (state: TodoState): Todo[] => {
  const { todos, filter } = state;
  if (filter === null) {
    return todos;
  }

  return todos.filter((todo) => todo.completed === filter);
};
**/
