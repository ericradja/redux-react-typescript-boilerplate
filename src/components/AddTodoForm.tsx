import React, { FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions/todosActions";

const AddTodoForm = () => {
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Example of loading from Redux
  // const loadingFromRedux = useSelector(loadingSelector);
  // console.log("loadingFromRedux :>> ", loadingFromRedux);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (inputRef && inputRef.current && inputRef.current.value) {
      await dispatch(
        addTodoAction({
          id: "",
          title: inputRef.current.value,
          completed: false,
        })
      );
      setLoading(false);
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task" ref={inputRef} />
      <button disabled={loading}>Submit</button>
      {loading && <p>Loading...</p>}
    </form>
  );
};

export default AddTodoForm;
