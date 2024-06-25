import { inject, injectable } from "tsyringe";
import { CreateTodo, Todo } from "../models/TodoModel";
import { ITodoService } from "./ITodoService";
import { Api } from "../api/Api";
import type { Iapi } from "../api/Iapi";
@injectable()
export class TodoService implements ITodoService {
  constructor(@inject(Api) private api: Iapi) {}
  async getTodos(): Promise<Todo[]> {
    return await this.api.getTodos();
  }
  async addTodo(name: string): Promise<Todo> {
    const todo: CreateTodo = {
      name,
      isComplete: false,
    };
    return await this.api.addTodo(todo);
  }
  async updateTodo(todo: Todo): Promise<Todo> {
    return this.api.updateTodo(todo);
  }
  async deleteTodo(id: number): Promise<void> {
    return this.api.deleteTodo(id);
  }
}
