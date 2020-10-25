import { Todo } from "../reducers/todosReducer";

export const todosSelector = (state: { todos: Todo[] }) => state.todos;
