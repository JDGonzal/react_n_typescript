import { Todo } from "../interfaces/interfaces"

interface todoItemProps {
  todo: Todo
}

export const TodoItem = ({todo}:todoItemProps) => {

  const handleDbClick = () =>{
    console.log('handleDbClick:', todo.description);
  }

  return (
    <li onDoubleClick={ handleDbClick}>
      {todo.description}
    </li>
  )
}
