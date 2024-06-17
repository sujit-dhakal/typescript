import { FC, useEffect } from "react";
import { Todo, TodoListProps } from "../models/Todo";
import { modifyTodo } from "../services/todoService";
import { deleteTodo } from "../api/todoApi";
import { Link } from "react-router-dom";
const TodoList: FC<TodoListProps> = ({ fetchTodoList, todos }) => {
  const handleToggleCompletion = async (todo: Todo) => {
    const updatedTodo = { ...todo, isComplete: !todo.isComplete };
    console.log(updatedTodo);
    await modifyTodo(updatedTodo);
    fetchTodoList();
  };
  const handleDelete = async (id: number) => {
    await deleteTodo(id);
    fetchTodoList();
  };
  useEffect(() => {
    fetchTodoList();
  }, [fetchTodoList]);
  return (
    <div>
      <Link to="/addtodo">
        <button>Add Todo</button>
      </Link>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.name}</p>
            <button onClick={() => handleToggleCompletion(todo)}>
              {todo.isComplete ? "Completed" : "Not Completed"}
            </button>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
