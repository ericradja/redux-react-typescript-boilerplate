// Task
export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";
export const DELETE_TODO_ACTION = "DELETE_TODO_ACTION";

// Filter
export const UPDATE_FILTER = "UPDATE_FILTER";

export interface Todo {
  id: number | string;
  title: string;
  completed: boolean;
}

export type TodoFilter = boolean | null;

export interface TodoState {
  todos: Todo[];
  filter: TodoFilter;
}

export interface FilterTodoAction {
  type: typeof UPDATE_FILTER;
  payload: TodoFilter;
}

export interface AddTodoAction {
  type: typeof ADD_TODO_ACTION;
  payload: Todo;
}

export interface UpdateTodoAction {
  type: typeof UPDATE_TODO_ACTION;
  payload: Todo;
}

export interface DeleteTodoAction {
  type: typeof DELETE_TODO_ACTION;
  payload: Todo;
}

export type TodoActionTypes =
  | AddTodoAction
  | UpdateTodoAction
  | DeleteTodoAction
  | FilterTodoAction;
