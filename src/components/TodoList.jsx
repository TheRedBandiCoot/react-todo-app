import React from 'react';
import { useTodoContext } from './TodoApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSquareCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
export function TodoList() {
  const { filteredTodos, handleChecked, handleDeleteTodo } = useTodoContext();
  return (
    <section>
      <ul className="todo-list">
        {filteredTodos.map((filteredTodo, i) => {
          const { id, value, complete } = filteredTodo;
          return (
            <li key={id}>
              <div>
                <p>{i + 1}</p>
              </div>
              <div className="todo-content">
                <h3
                  style={
                    complete
                      ? {
                          textDecoration: 'line-through',
                          color: '#BDBFA9',
                        }
                      : {}
                  }
                >
                  {value}
                </h3>
              </div>
              <button
                style={complete ? { backgroundColor: '#B5B9B3' } : {}}
                type="button"
                onClick={() => handleChecked(id)}
              >
                {complete ? (
                  <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#919191' }} />
                ) : (
                  <FontAwesomeIcon icon={faSquareCheck} />
                )}
              </button>
              <button type="button" onClick={() => handleDeleteTodo(id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
