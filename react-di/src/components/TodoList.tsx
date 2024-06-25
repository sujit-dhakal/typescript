import { FC, useEffect } from "react";
import { Todo } from "../models/TodoModel";
import { fetchTodos, deleteTodo, updateTodo } from "../app/store";
import { AppDispatch, RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TodoList: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  const handleDelete = async (id: number) => {
    dispatch(deleteTodo(id));
  };
  const handleToggle = async (todo: Todo) => {
    const updatedTodoValue = { ...todo, isComplete: !todo.isComplete };
    dispatch(updateTodo(updatedTodoValue));
  };
  return (
    <div>
      <h1>Todos</h1>
      <Link to="/add">
        <button>Add Todo</button>
      </Link>
      <ul style={{ listStyle: "none" }}>
        {todos.map((todo) => {
          return (
            <>
              <li key={todo.id}>{todo.name}</li>
              <button onClick={() => handleToggle(todo)}>
                {todo.isComplete ? "Completed" : "NotCompleted"}
              </button>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
