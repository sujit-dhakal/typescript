import { useState, useEffect } from "react";
import axios from "axios";
import CreateTodo from "./CreateTodo";
interface Todo {
  name: string;
  id: number;
}
// for todo list
const TodoList = () => {
  const [todoData, setTodoData] = useState<Todo[]>([]);
  useEffect(() => {
    const getTodo = async () => {
      try {
        const { data } = await axios.get("http://localhost:8088/api/Todo");
        console.log(data);
        setTodoData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTodo();
  }, []);

  // for adding todo
  const addTodo = async (name: string) => {
    try {
      const response = await axios.post("http://localhost:8088/api/Todo", {
        name,
      });
      const newTodo: Todo = response.data;
      setTodoData([...todoData, newTodo]);
    } catch (error) {
      console.log(error);
    }
  };
  // for deleting todo
  const deleteTodo = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8088/api/Todo/${id}`);
      setTodoData(todoData.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        {/* create */}
        <CreateTodo onAddTodo={addTodo} />
      </div>
      {/* list */}
      <ul style={{ listStyle: "none" }}>
        {todoData.map(({ id, name }) => {
          return (
            <li key={id}>
              <h1>{name}</h1>
              {/* delete */}
              <button onClick={() => deleteTodo(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <div></div>
    </div>
  );
};

export default TodoList;
