import { FC, useMemo, useState, useEffect } from "react";
import "reflect-metadata";
import TodoList from "./components/TodoList";
import { container } from "tsyringe";
import { TodoService } from "./services/TodoService";
import { ITodoService } from "./services/ITodoService";
import AddTodo from "./components/AddTodo";
import { Todo } from "./models/TodoModel";

const App: FC = () => {
  const todoservice = useMemo(
    () => container.resolve<ITodoService>(TodoService),
    []
  );
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodo = async () => {
      const todos = await todoservice.getTodos();
      setTodos(todos);
      console.log(todos);
    };
    fetchTodo();
  }, [todoservice]);

  return (
    <div>
      <TodoList todoservice={todoservice} todos={todos} setTodos={setTodos} />
      <AddTodo todoservice={todoservice} todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
