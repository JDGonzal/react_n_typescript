import React from "react";
import { TodoProvider } from "./context/TodoProvider";
import { TodoList } from "./components/TodoList";
import { TodoTitle } from "./components/TodoTitle";

export const Todo = () => {

  return (
    <TodoProvider>
      <h2>useContext , createContext, ContextProvider</h2>
      <TodoTitle/>
      <TodoList />
    </TodoProvider>
  );
};
