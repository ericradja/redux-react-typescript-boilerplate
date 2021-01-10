import { Todo, TodoState } from "../types";

export const todosSelector = (state: TodoState): Todo[] => state.todos;
