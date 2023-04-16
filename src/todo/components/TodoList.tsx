// import { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  // Need the useContext
  // const { todoState } = useContext(TodoContext);
  // const { todoArray } = todoState;

  // Ignore the useContext and add the Hook "useTodos"
  const { todoArray} =useTodos();

  return (
    <ul>
      {todoArray.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
