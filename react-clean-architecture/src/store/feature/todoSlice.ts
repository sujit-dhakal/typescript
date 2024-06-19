import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo, todoState } from "../../models/Todo";

const initialState: todoState = {
  todos: [],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      state.todos[action.payload].isComplete =
        !state.todos[action.payload].isComplete;
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
export default TodoSlice.reducer;

export const { setTodos, addTodo, toggleTodo, removeTodo } = TodoSlice.actions;
