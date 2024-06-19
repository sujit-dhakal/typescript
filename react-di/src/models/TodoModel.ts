export interface Todo {
  id: number;
  name: string;
  isComplete: boolean;
}

export type CreateTodo = Omit<Todo, "id">;
