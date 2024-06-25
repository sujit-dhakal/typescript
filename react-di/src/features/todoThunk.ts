import { createAsyncThunk } from "@reduxjs/toolkit";
import { ITodoService } from "../services/ITodoService";
import { Todo } from "../models/TodoModel";

export const buildFetchTodosThunk = (todoService: ITodoService) => {
  return createAsyncThunk<Todo[]>("todo/fetchtodos", async () => {
    const response = await todoService.getTodos();
    return response;
  });
};

export const buildAddTodoThunk = (todoService: ITodoService) => {
  return createAsyncThunk<Todo, string>(
    "todo/addtodo",
    async (name: string) => {
      const response = await todoService.addTodo(name);
      return response;
    }
  );
};

export const buildUpdateTodoThunk = (todoService: ITodoService) => {
  return createAsyncThunk<Todo, Todo>("todo/updateTodo", async (todo: Todo) => {
    const response = await todoService.updateTodo(todo);
    return response;
  });
};

export const buildDeleteTodoThunk = (todoService: ITodoService) => {
  return createAsyncThunk<number, number>("todo/delete", async (id: number) => {
    await todoService.deleteTodo(id);
    return id;
  });
};
