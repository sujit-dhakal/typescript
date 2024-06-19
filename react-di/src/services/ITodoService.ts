import { Todo } from "../models/TodoModel";
export interface ITodoService {
  getTodos(): Promise<Todo[]>;
  addTodo(name: string): Promise<Todo>;
  updateTodo(todo: Todo): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
}
