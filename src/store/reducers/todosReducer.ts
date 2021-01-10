import {
  ADD_TODO_ACTION,
  DELETE_TODO_ACTION,
  Todo,
  TodoActionTypes,
  UPDATE_TODO_ACTION,
} from "../types";

let id = 2;
const initialTodos: Todo[] = [
  { id: 1, title: "Aze", completed: false },
  { id: 2, title: "Aze 2", completed: false },
];

// const initialState: TodoState = { todos: initialTodos, filter: null };

export const todosReducer = (
  state: Todo[] = initialTodos,
  action: TodoActionTypes
): Todo[] => {
  switch (action.type) {
    case ADD_TODO_ACTION:
      return [...state, { ...action.payload, id: ++id, completed: false }];
    case UPDATE_TODO_ACTION:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        } else {
          return todo;
        }
      });
    case DELETE_TODO_ACTION:
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};
