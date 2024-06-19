import { FC, FormEvent, useState } from "react";
import { ITodoService } from "../services/ITodoService";
import { Todo } from "../models/TodoModel";
interface AddTodoProps {
  todoservice: ITodoService;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const AddTodo: FC<AddTodoProps> = ({ todoservice, todos, setTodos }) => {
  const [name, setName] = useState<string>("");
  const handleAddTodo = async (e: FormEvent) => {
    e.preventDefault();
    const todo = await todoservice.addTodo(name);
    setName("");
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
