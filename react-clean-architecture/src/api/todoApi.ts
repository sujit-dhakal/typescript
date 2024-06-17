import axiosInstance from "./axiosInstance";
import { CreateTodo, Todo } from "../models/Todo";

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axiosInstance.get<Todo[]>("/api/Todo");
  return response.data;
};

export const addTodo = async (todo: CreateTodo): Promise<Todo> => {
  const response = await axiosInstance.post<Todo>("api/Todo", todo);
  return response.data;
};

export const updateTodo = async (todo: Todo): Promise<Todo> => {
  const response = await axiosInstance.put<Todo>(`api/Todo/${todo.id}`, todo);
  return response.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axiosInstance.delete(`api/Todo/${id}`);
};
