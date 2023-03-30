import React from 'react'
import { TodoProvider } from './context/TodoProvider';

export const Todo = () => {
  return (
    <TodoProvider>
      <h2>useContext , createContext, ContextProvider</h2>
      <h1>Todo:</h1>
      <ul>
        <li> </li>
      </ul>
    </TodoProvider>
  )
}
