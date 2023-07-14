import { useState } from 'react';
import { v4 as uuid } from 'uuid';

import TodoForm from './Components/TodoForm';
import TodoTable from './Components/TodoTable';
import { Todo, TodoList } from './Types/Todo.types';

const App = () => {
  const [todos, setTodos] = useState<TodoList | []>([]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: uuid(),
      completed: false,
      title,
    };

    setTodos((prevState) => [...prevState, newTodo]);
  };

  const handleSubmit = (todoInput: string) => {
    if (todoInput === '') {
      return;
    }

    addTodo(todoInput);
  };

  const toggleTodoCompleted = (todoId: string) => {
    const todoIndex = todos.findIndex(({ id }) => id === todoId);

    todos[todoIndex] = {
      ...todos[todoIndex],
      completed: !todos[todoIndex].completed,
    };

    setTodos([...todos]);
  };

  const changeTodo = (todoId: string) => {
    const todoIndex = todos.findIndex(({ id }) => id === todoId);

    const newTodoTitle = prompt('새로 바꿀 내용?', todos[todoIndex].title);

    if (!newTodoTitle) {
      return;
    }

    todos[todoIndex] = {
      ...todos[todoIndex],
      title: newTodoTitle,
    };

    setTodos([...todos]);
  };

  const deleteTodo = (todoId: string) => {
    const todoIndex = todos.findIndex(({ id }) => id === todoId);
    const isConfirm = confirm(`진짜 삭제하실 거에요?\n할일 내용: ${todos[todoIndex].title}`);

    if (!isConfirm) {
      return;
    }

    setTodos([...todos.filter(({ id }) => id !== todoId)]);
  };

  return (
    <div className="p-4">
      <TodoForm onSubmit={handleSubmit} />
      <TodoTable
        todos={todos}
        onToggle={toggleTodoCompleted}
        onChange={changeTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
};

export default App;
