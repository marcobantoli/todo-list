import React from 'react';
import './TodoList.css';

function TodoList({ todos }) {
  return (
    <>
      <div className="header-container">
        <div>Description</div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
      <ul>
        {todos}
      </ul>
    </>
  );
}

export default TodoList;
