import React from 'react'
import './Todo.css';

function Todo({ desc }) {
  return (
    <li className="todo-container">
      <div className="description">{desc}</div>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
}

export default Todo;
