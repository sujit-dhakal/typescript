import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "reflect-metadata";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
const TodoApp = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="add/" element={<AddTodo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default TodoApp;
