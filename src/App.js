import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";

import Cart from "./components/ui/Cart";
import TodoList from "./components/todos/TodoList";

const filters = ["all", "active", "complated"];

function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <div className="App">
      <Cart>
        <Header filters={filters} filter={filter} filterUpdate={setFilter} />
        <TodoList filter={filter} />
      </Cart>
    </div>
  );
}

export default App;
