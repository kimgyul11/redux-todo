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
    dispatch(todoActions.updateTodo({ id, title, state: "complated" }));
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
