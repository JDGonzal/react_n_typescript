// This is my task list
export interface Todo{
  id: string;
  description: string;
  complete: boolean;
}

// How I want to looks like the INITIAL_STATE
export interface TodoState{
  todoCount: number;
  todoArray: Todo[];
  completed: number;
  pending: number;
}
