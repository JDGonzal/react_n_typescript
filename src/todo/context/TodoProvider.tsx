import { useReducer } from "react";

import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/interfaces";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todoArray: [
    {
      id: "1",
      description: "Recolectar las piedras del infinito",
      complete: false,
    },
    {
      id: "2",
      description: "Piedra del Alma",
      complete: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[];
  /*In ReactJS with TypeScript, the return type of a functional component can be specified as either JSX. Element or ReactElement. 
  JSX. Element is a type alias for a JSX element. JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.*/
}

export const TodoProvider = ({ children }: props) => {
  // Just for semantic sense, change "state" to "todoState"
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  return (
    <TodoContext.Provider
      value={{
        todoState,
      }}
    >
      {/* It will be as a "Higher-order Component */}
      {children}
    </TodoContext.Provider>
  );
};
