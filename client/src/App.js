import { useEffect, useState } from 'react';
import InputSection from './InputSection';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/todos');
        const storedTodos = await response.json();
        setTodos(storedTodos);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }, []);

  function handleAddTodo(desc) {
    (async () => {
      try {
        const response = await fetch('/todos', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            description: desc
          })
        });
        const newTodo = await response.json();
        const result = [...todos];
        result.push(newTodo);
        setTodos(result);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }

  function handleDeleteTodo(id) {
    (async () => {
      try {
        const response = await fetch(`/todos/${id}`, {
          method: 'DELETE',
        });
        const result = todos.filter(todo => todo.todo_id !== id);
        setTodos(result);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }

  function handleEditTodo(id, desc, setIsEditing) {
    (async () => {
      try {
        const response = await fetch(`/todos/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            description: desc,
          }),
        });
        const newTodos = [...todos];
        const todo = newTodos.find(todo => todo.todo_id === id);
        todo.description = desc;
        setTodos(newTodos);
        setIsEditing(false);
      } catch (err) {
        console.error(err.message);
      }
    })();
  }

  return (
    <div className="main-container">
      <InputSection handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} handleDelete={handleDeleteTodo} handleEdit={handleEditTodo} />
    </div>
  );
}

export default App;
