import React from "react";
import styles from "./Header.module.css";

export default function Header({ filters, filter, filterUpdate }) {
  return (
    <header>
      <div>
        <button>야간모드</button>
      </div>

      <ul>
        {filters.map((item) => {
          return (
            <li key={item.index} onClick={() => filterUpdate(item)}>
              {item}
            </li>
          );
        })}
      </ul>
    </header>
  );
}
