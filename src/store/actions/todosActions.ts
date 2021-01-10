import {
  Todo,
  UPDATE_TODO_ACTION,
  DELETE_TODO_ACTION,
  TodoActionTypes,
} from "../types";

export const toggleTodoAction = (todo: Todo): TodoActionTypes => {
  return {
    type: UPDATE_TODO_ACTION,
    payload: { ...todo, completed: !todo.completed },
  };
};

export const deleteTodoAction = (todo: Todo): TodoActionTypes => ({
  type: DELETE_TODO_ACTION,
  payload: todo,
});
