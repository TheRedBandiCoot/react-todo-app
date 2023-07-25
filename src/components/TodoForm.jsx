import React from 'react';
import { useTodoContext } from './TodoApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
export function TodoForm() {
  const { onSubmit, value, onChange, handleOnChange, options } = useTodoContext();
  return (
    <section>
      <form className="todo-form" onSubmit={onSubmit}>
        <input type="text" placeholder="ADD TASK" value={value} onChange={onChange} />
        <button type="submit">
          <FontAwesomeIcon className="icon" icon={faSquarePlus} style={{ color: '#5dcc53' }} />
        </button>
      </form>
      <div className="select">
        <select onChange={handleOnChange}>
          {options.map((option, i) => {
            return (
              <option key={i} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </section>
  );
}
