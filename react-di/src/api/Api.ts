import { injectable } from "tsyringe";
import { CreateTodo, Todo } from "../models/TodoModel";
import { Iapi } from "./Iapi";
import axios from "axios";

@injectable()
export class Api implements Iapi {
  private apiUrl = "http://localhost:8088/api/Todo";
  async getTodos(): Promise<Todo[]> {
    const response = await axios.get<Todo[]>(this.apiUrl);
    return response.data;
  }
  async addTodo(todo: CreateTodo): Promise<Todo> {
    const response = await axios.post<Todo>(this.apiUrl, todo);
    return response.data;
  }
  async updateTodo(todo: Todo): Promise<Todo> {
    const response = await axios.put<Todo>(`${this.apiUrl}/${todo.id}`, todo);
    return response.data;
  }
  async deleteTodo(id: number): Promise<void> {
    await axios.delete<Todo>(`${this.apiUrl}/${id}`);
  }
}
