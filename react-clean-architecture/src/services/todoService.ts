import { fetchTodos, addTodo, deleteTodo, updateTodo } from "../api/todoApi";
import { CreateTodo, Todo } from "../models/Todo";

export const getTodos = async (): Promise<Todo[]> => {
  return await fetchTodos();
};

export const createTodo = async (name: string): Promise<Todo> => {
  const newTodo: CreateTodo = {
    name,
    isComplete: false,
  };
  return await addTodo(newTodo);
};

export const modifyTodo = async (todo: Todo): Promise<Todo> => {
  return await updateTodo(todo);
};

export const removeTodo = async (id: number): Promise<void> => {
  await deleteTodo(id);
};
