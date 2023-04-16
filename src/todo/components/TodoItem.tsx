// import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../interfaces/interfaces"
// import { useContext } from 'react';

interface todoItemProps {
  todo: Todo
}

export const TodoItem = ({todo}:todoItemProps) => {

  //const { toggleTodo} = useContext( TodoContext );
  const { toggleTodo } =useTodos();

  return (
    <li style={{
      cursor:'pointer',
      textDecoration:todo.complete?'line-through':''
    }} onDoubleClick={ () =>  toggleTodo( todo.id )}>
      {todo.description}
    </li>
  )
}
