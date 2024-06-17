import { FC, useState } from "react";
import { AddTodoProps } from "../models/Todo";
import { createTodo } from "../services/todoService";
import { Link } from "react-router-dom";

const AddTodo: FC<AddTodoProps> = ({ fetchTodoList }) => {
  const [name, setName] = useState<string>("");
  const handleAddTodo = async () => {
    await createTodo(name);
    setName("");
    fetchTodoList();
  };
  return (
    <div>
      <h1>Add todo</h1>
      <form onClick={() => handleAddTodo()}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Add Todo</button>
      </form>
      <Link to="/">
        <button>Back to TodoList</button>
      </Link>
    </div>
  );
};

export default AddTodo;
