import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./Todos.module.css";
import Todo from "./Todo";
import Input from "./Input";

export default function TodoList({ filter }) {
  const todos = useSelector((state) => state.todos.todos);
  const filtered = getFilteredItems(todos, filter);

  return (
    <>
      <ul className={styles.todosWrap}>
        {filtered.map((item) => {
          return <Todo key={item.id} todo={item} />;
        })}
      </ul>
      <Input />
    </>
  );
}
function getFilteredItems(todos, filter) {
  if (filter === "all") {
    return todos;
  }
  return todos.filter((todo) => todo.state === filter);
}
