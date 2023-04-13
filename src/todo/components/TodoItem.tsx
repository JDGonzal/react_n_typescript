import { TodoContext } from "../context/TodoContext";
import { Todo } from "../interfaces/interfaces"
import { useContext } from 'react';

interface todoItemProps {
  todo: Todo
}

export const TodoItem = ({todo}:todoItemProps) => {

  const { toggleTodo} = useContext( TodoContext );

  const handleDbClick = () =>{
    toggleTodo( todo.id );
  }

  return (
    <li style={{
      cursor:'pointer',
      textDecoration:todo.complete?'line-through':''
    }} onDoubleClick={ handleDbClick}>
      {todo.description}
    </li>
  )
}
