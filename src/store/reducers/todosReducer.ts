import {
  ADD_TODO_ACTION,
  DELETE_TODO_ACTION,
  Todo,
  TodoActionTypes,
  UPDATE_TODO_ACTION,
} from "../types";

let id = 5;
const initialTodos: Todo[] = [
  { id: 1, title: "Aller au cinéma", completed: false },
  { id: 2, title: "Aller à l'intreinement", completed: false },
  { id: 3, title: "Manger", completed: false },
  { id: 4, title: "Coder", completed: false },
  { id: 5, title: "Dormir", completed: false },
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
