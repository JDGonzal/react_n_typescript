import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  // Need the useContext
  const { todoState } = useContext(TodoContext);
  const { todoArray } = todoState;

  console.log(todoState);
  return (
    <ul>
      {todoArray.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
