import { FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch, addTodo } from "../app/store";
import { Link } from "react-router-dom";
const AddTodo: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const handleAddTodo = async (e: FormEvent) => {
    e.preventDefault();
    await dispatch(addTodo(name));
    setName("");
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
      <Link to="/">
        <button>Back To List</button>
      </Link>
    </div>
  );
};

export default AddTodo;
