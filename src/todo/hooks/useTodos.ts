import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const useTodos = () => {
  const { todoState, toggleTodo } = useContext(TodoContext);
  const { todoArray} = todoState;

  return {
    todoArray: todoArray,
    pendingTodoArray: todoArray.filter( todo => !todo.complete ).length,
    toggleTodo: toggleTodo
  }
}