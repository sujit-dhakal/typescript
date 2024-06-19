import { FC } from "react";
// import { container } from "tsyringe";
import { Todo } from "../models/TodoModel";
import { ITodoService } from "../services/ITodoService";
// import { TodoService } from "../services/TodoService";

interface TodoListProps {
  todoservice: ITodoService;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<TodoListProps> = ({ todoservice, todos, setTodos }) => {
  const handleDelete = async (id: number) => {
    await todoservice.deleteTodo(id);
    const updatedTodo = await todoservice.getTodos();
    setTodos(updatedTodo);
  };
  const handleToggle = async (todo: Todo) => {
    const updatedTodo = { ...todo, isComplete: !todo.isComplete };
    await todoservice.updateTodo(updatedTodo);
    const updatedTodos = await todoservice.getTodos();
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h1>Todos</h1>
      <ul>
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
