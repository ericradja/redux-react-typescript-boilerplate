import React from "react";
import { connect } from "react-redux";
import { toggleTodoAction } from "../store/actions/todosActions";
import { Todo, UPDATE_TODO_ACTION } from "../store/reducers/todosReducer";
import { todosSelector } from "../store/selectors/todosSelector";

interface TodoItemProps {
  todo: Todo;
  onToggle: (todo: Todo) => void;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (todo: Todo) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        {todo.title}
      </label>
    </li>
  );
};

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
};

export const TodoListStore = connect(
  (state: { todos: Todo[] }) => ({
    todos: todosSelector(state),
  }),
  (dispatch) => ({
    onToggle: (todo: Todo) => dispatch(toggleTodoAction(todo)),
  })
)(TodoList);
