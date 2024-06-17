import { FC, useState } from "react";
import TodoList from "../components/TodoList";
import { getTodos } from "../services/todoService";
import { Todo } from "../models/Todo";
import AddTodo from "../components/AddTodo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const TodoApp: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const fetchTodoList = async () => {
    const todos = await getTodos();
    setTodos(todos);
  };
  return (
    <div>
      <h1>TodoApp</h1>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<TodoList fetchTodoList={fetchTodoList} todos={todos} />}
          />
          <Route
            path="addtodo/"
            element={<AddTodo fetchTodoList={fetchTodoList} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default TodoApp;
