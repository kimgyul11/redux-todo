const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = action.payload;
      state.todos.push({
        id: newTodo.id,
        title: newTodo.title,
        state: newTodo.state,
      });
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    updateTodo(state, action) {
      const targetItem = action.payload;
      const duplicationItem = state.todos.find(
        (item) => item.id === targetItem.id
      );
      duplicationItem.state = targetItem.state;
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
