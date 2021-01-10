import { Todo, TodoFilter, TodoState } from "../types";

export const filterSelector = (state: TodoState): TodoFilter => state.filter;

export const filteredTodosSelector = (state: TodoState): Todo[] => {
  const { todos, filter } = state;
  if (filter === null) {
    return todos;
  }

  return todos.filter((todo) => todo.completed === filter);
};
