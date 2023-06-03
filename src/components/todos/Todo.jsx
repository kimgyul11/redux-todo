import React from "react";
import styles from "./Todo.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../../redusers/todoSlice";

export default function Todo({ todo }) {
  const { id, title, state } = todo;
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(todoActions.removeTodo(id));
  };

  const onStateHandler = () => {
    if (state === "active") {
      dispatch(todoActions.updateTodo({ id, title, state: "complated" }));
    }
    if (state === "complated") {
      dispatch(todoActions.updateTodo({ id, title, state: "active" }));
    }
  };

  return (
    <li className="">
      <input
        type="checkbox"
        id={id}
        onChange={onStateHandler}
        checked={state === "complated"}
      />
      <label htmlFor={id}>{title}</label>
      <button onClick={onClickHandler}>삭제</button>
    </li>
  );
}
