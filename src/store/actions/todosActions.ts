import { Todo, UPDATE_TODO_ACTION } from "../reducers/todosReducer";

export const toggleTodoAction = (todo: Todo) => ({
  type: UPDATE_TODO_ACTION,
  payload: { ...todo, completed: !todo.completed },
});
