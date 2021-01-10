import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoAction,
  toggleTodoAction,
} from "../store/actions/todosActions";
import { filteredTodosSelector } from "../store/selectors/filterSelector";
import { Todo } from "../store/types";

interface TodoProps {
  onToggle: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
}

interface TodoItemProps extends TodoProps {
  todo: Todo;
}

interface TodoListProps extends TodoProps {
  todos: Todo[];
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggle,
  onDelete,
}) => {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo)}
        />
        {todo.title}
        <button style={{ marginLeft: 10 }} onClick={() => onDelete(todo)}>
          x
        </button>
      </label>
    </li>
  );
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onDelete,
}) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export const TodoListStore: React.FC = () => {
  const todos = useSelector(filteredTodosSelector);
  const dispatch = useDispatch();

  const onToggle = React.useCallback(
    (todo: Todo) => {
      dispatch(toggleTodoAction(todo));
    },
    [dispatch]
  );

  const onDelete = React.useCallback(
    (todo: Todo) => {
      dispatch(deleteTodoAction(todo));
    },
    [dispatch]
  );

  return <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />;
};

/*
export const TodoListStore = connect(
  (state: TodoState) => ({
    todos: todosSelector(state),
  }),
  (dispatch) => ({
    onToggle: (todo: Todo) => dispatch(toggleTodoAction(todo)),
  })
)(TodoList);
*/
