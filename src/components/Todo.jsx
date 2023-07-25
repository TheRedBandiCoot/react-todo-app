import React, { useState } from 'react';
import { TodoList } from './TodoList';
import { TodoForm } from './TodoForm';

export function Todo() {
  const [value, setValue] = useState(false);
  return (
    <main className="todo">
      <div
        style={value ? { textDecoration: 'line-through', opacity: '50%' } : {}}
        onClick={() => setValue(!value)}
      >
        <h1>Todo App</h1>
      </div>
      <TodoForm />
      <TodoList />
    </main>
  );
}
