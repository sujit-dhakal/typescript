import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import { container } from "tsyringe";
// import { TodoService } from "./services/TodoService";
// import { ITodoService } from "./services/ITodoService";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
// const todoservice = container.resolve<ITodoService>(TodoService);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
