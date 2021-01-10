import { SET_LOADING, TodoActionTypes } from "../types";

export const loadingReducer = (
  state: boolean = false,
  action: TodoActionTypes
): boolean => {
  switch (action.type) {
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }
};
