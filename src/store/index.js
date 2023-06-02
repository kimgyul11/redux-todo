import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../redusers/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export default store;
