import { CreateTodo, Todo } from "../models/TodoModel";

export interface Iapi {
  getTodos(): Promise<Todo[]>;
  addTodo(todo: CreateTodo): Promise<Todo>;
  updateTodo(todo: Todo): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
}
