import { FC, useState } from "react";

interface CreateProps {
  onAddTodo: (name: string) => void;
}

const CreateTodo: FC<CreateProps> = ({ onAddTodo }) => {
  const [name, setName] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo(name);
    setName("");
  };
  return (
    <div>
      <h1>Create Todo</h1>
      <form onClick={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default CreateTodo;
