import { useTodos } from "../hooks/useTodos";

export const TodoTitle = () => {

  const { pendingTodoArray} =useTodos();
  return (
    <h1>
      Todos: { pendingTodoArray}
    </h1>
  )
}
