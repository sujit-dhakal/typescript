import { configureStore } from "@reduxjs/toolkit";
import { buildTodoSlice } from "../features/todoSlice";
import { container } from "tsyringe";
import { TodoService } from "../services/TodoService";

const todoService = container.resolve(TodoService);
const {
  slice: todoSlice,
  fetchTodos,
  addTodo,
  updateTodo,
  deleteTodo,
} = buildTodoSlice(todoService);
const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});
export { store, fetchTodos, addTodo, updateTodo, deleteTodo };

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
