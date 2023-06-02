import React, { useState } from "react";
import styles from "./Input.module.css";
import { useDispatch } from "react-redux";
import { todoActions } from "../../redusers/todoSlice";

export default function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const changeHandler = (e) => {
    setTitle(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.random();
    if (title.trim() === "") {
      return;
    }
    dispatch(todoActions.addTodo({ title, id, state: "active" }));
    setTitle("");
  };
  return (
    <div className={styles.inputWrap}>
      <form onSubmit={submitHandler}>
        <div className={styles.input}>
          <input type="text" value={title} onChange={changeHandler} />
          <button>추가</button>
        </div>
      </form>
    </div>
  );
}
