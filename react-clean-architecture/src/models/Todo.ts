export interface Todo {
  id: number;
  name: string;
  isComplete: boolean;
}

export type CreateTodo = Omit<Todo, "id">;

export interface TodoListProps {
  fetchTodoList: () => void;
  todos: Todo[];
}

export interface AddTodoProps {
  fetchTodoList: () => void;
}
