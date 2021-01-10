import { wait } from "../../helpers";
import {
  Todo,
  UPDATE_TODO_ACTION,
  DELETE_TODO_ACTION,
  TodoActionTypes,
  ADD_TODO_ACTION,
  SET_LOADING,
} from "../types";

/**
export const addTodoAction = (todo: Todo): TodoActionTypes => {
  return {
    type: ADD_TODO_ACTION,
    payload: todo,
  };
};
*/

// Example of async action
export const addTodoAction = (todo: Todo) => async (dispatch: Function) => {
  // Example of loading
  dispatch({ type: SET_LOADING, payload: true });

  await wait(2000);
  const res = dispatch({ type: ADD_TODO_ACTION, payload: todo });

  // Example of loading
  dispatch({ type: SET_LOADING, payload: false });

  return res;
};

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
