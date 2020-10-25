export const ADD_TODO_ACTION = "ADD_TODO_ACTION";
export const UPDATE_TODO_ACTION = "UPDATE_TODO_ACTION";

export interface Action {
  type: string;
  payload: Todo;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

let id = 2;
const initialState: Todo[] = [
  { id: 1, title: "Aze", completed: false },
  { id: 2, title: "Aze 2", completed: true },
];

export const todosReducer = (
  state: Todo[] = initialState,
  action: Action
): Todo[] => {
  switch (action.type) {
    case "ADD_TODO_ACTION":
      return [...state, { ...action.payload, id: ++id, completed: false }];
    case "UPDATE_TODO_ACTION":
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};
