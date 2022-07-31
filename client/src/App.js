import { useState } from 'react';
import InputSection from './InputSection';
import TodoList from './TodoList';
import Todo from './Todo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(desc) {
    (async () => {
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
      const newTodos = [...todos];
      newTodos.push(<Todo key={newTodo.todo_id} desc={newTodo.description} />);
      setTodos(newTodos);
    })();
  }

  return (
    <div className="main-container">
      <InputSection handleAddTodo={handleAddTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
