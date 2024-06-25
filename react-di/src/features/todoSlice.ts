import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  buildAddTodoThunk,
  buildDeleteTodoThunk,
  buildFetchTodosThunk,
  buildUpdateTodoThunk,
} from "./todoThunk";
import { Todo, todoState } from "../models/TodoModel";
import { ITodoService } from "../services/ITodoService";

const initialState: todoState = {
  todos: [],
};

export const buildTodoSlice = (todoService: ITodoService) => {
  const fetchTodos = buildFetchTodosThunk(todoService);
  const addTodo = buildAddTodoThunk(todoService);
  const updateTodo = buildUpdateTodoThunk(todoService);
  const deleteTodo = buildDeleteTodoThunk(todoService);
  const slice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(
        fetchTodos.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.todos = action.payload;
        }
      );
      builder.addCase(
        addTodo.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          state.todos.push(action.payload);
        }
      );
      builder.addCase(
        updateTodo.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          const index = state.todos.findIndex(
            (todo) => todo.id === action.payload.id
          );
          if (index !== -1) {
            state.todos[index] = action.payload;
          }
        }
      );
      builder.addCase(
        deleteTodo.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.todos = state.todos.filter(
            (todo) => todo.id !== action.payload
          );
        }
      );
    },
  });
  return {
    slice,
    fetchTodos,
    updateTodo,
    addTodo,
    deleteTodo,
  };
};
