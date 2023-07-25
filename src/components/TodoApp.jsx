import React, { createContext, useContext } from 'react';
import { Todo } from './Todo';
import useTodo from '../hooks/useTodo';

const TodoContext = createContext();
export const useTodoContext = () => useContext(TodoContext);

export function TodoApp() {
  const value = useTodo();
  return (
    <TodoContext.Provider value={value}>
      <Todo />
    </TodoContext.Provider>
  );
}
