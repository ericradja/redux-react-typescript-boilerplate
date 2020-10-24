export interface Action {
  type: "ADD_TODO_ACTION" | "UPDATE_TODO_ACTION";
  payload: any;
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

export const todosReducer = (state: Todo[] = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_TODO_ACTION":
      return [...state, { id: ++id, completed: false, ...action.payload }];
    default:
      return state;
  }
};
