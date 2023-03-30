import { TodoContext } from './TodoContext';

interface props{
  children: JSX.Element | JSX.Element[]
  /*In ReactJS with TypeScript, the return type of a functional component can be specified as either JSX. Element or ReactElement. 
  JSX. Element is a type alias for a JSX element. JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files.*/
}

export const TodoProvider = ({children}:props) => {
  return (
    <TodoContext.Provider value={{}}>
      {/* It will be as a "Higher-order Component */}
      {children}
    </TodoContext.Provider>
  )
}
