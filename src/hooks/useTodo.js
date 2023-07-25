import { useEffect, useState, useMemo } from 'react';
import { v4 } from 'uuid';
const LOCAL_STORAGE_KEY = 'TodoList.addTodos';

const useTodo = () => {
  const [value, setValue] = useState('');
  const [addTodos, setAddTodos] = useState([]);
  const [filterOption, setFilterOption] = useState('All');
  const [options, setOptions] = useState(['All', 'Completed', 'Unfinished']);

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    const addNewTodo = {
      id: v4(),
      complete: false,
      value,
    };
    setAddTodos([...addTodos, addNewTodo]);
    setValue('');
  };

  const handleChecked = (id) => {
    const updateTodos = addTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setAddTodos(updateTodos);
  };

  const handleDeleteTodo = (id) => {
    const filterTodo = addTodos.filter((todo) => todo.id !== id);
    setAddTodos(filterTodo);
  };

  const filteredTodos = useMemo(() => {
    switch (filterOption) {
      case options[1]: {
        return addTodos.filter((todo) => todo.complete === true);
      }
      case options[2]: {
        return addTodos.filter((todo) => todo.complete !== true);
      }
      default:
        return addTodos;
    }
  }, [addTodos, filterOption]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setFilterOption(value);
  };
  useEffect(() => {
    const addTodoJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (addTodoJSON != null) setAddTodos(JSON.parse(addTodoJSON));
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(addTodos));
  }, [addTodos]);

  return {
    onSubmit,
    value,
    onChange,
    handleOnChange,
    options,
    filteredTodos,
    handleChecked,
    handleDeleteTodo,
  };
};
export default useTodo;
