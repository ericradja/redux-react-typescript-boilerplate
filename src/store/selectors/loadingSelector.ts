import { TodoState } from "../types";

export const loadingSelector = (state: TodoState): boolean => state.loading;
