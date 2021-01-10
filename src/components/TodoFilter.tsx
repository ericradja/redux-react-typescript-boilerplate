import { connect } from "react-redux";
import React from "react";
import { updateFilterAction } from "../store/actions/filterActions";
import { filterSelector } from "../store/selectors/filterSelector";
import { TodoFilter as FilterType, TodoState } from "../store/types";

interface TodoFilterProps {
  filter: FilterType;
  onChange: (completed: FilterType) => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({ filter, onChange }) => {
  return (
    <div>
      <button disabled={filter === null} onClick={() => onChange(null)}>
        Aucun filtre
      </button>
      <button disabled={filter === true} onClick={() => onChange(true)}>
        Complété
      </button>
      <button disabled={filter === false} onClick={() => onChange(false)}>
        A faire
      </button>
    </div>
  );
};

export const TodoFilterStore = connect(
  (state: TodoState) => ({ filter: filterSelector(state) }),
  (dispatch) => ({
    onChange: (filter: FilterType) => dispatch(updateFilterAction(filter)),
  })
)(TodoFilter);
