import { FC } from "react";
import TodoList from "./components/TodoList";
interface AppProps {
  title: string;
}

// FC functional component
const App: FC<AppProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <TodoList />
    </div>
  );
};
export default App;
