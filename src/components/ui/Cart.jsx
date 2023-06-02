import React from "react";
import styles from "./Cart.module.css";

export default function Cart({ children }) {
  return <div className={styles.card}>{children}</div>;
}
