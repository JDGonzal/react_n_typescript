import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction =
  | { type: 'addTodo', payload: Todo }
  | { type: 'toggleTodo', payload: { id: string } }

// A Reducer has to work with two arguments: 
// The previos status and the action
export const todoReducer = (state: TodoState, action: TodoAction):TodoState => {
  switch (action.type) {
    case 'addTodo':
      return {
        ...state,
        todoArray: [...state.todoArray, action.payload]
      };

    default:
      return state;
  }
}
