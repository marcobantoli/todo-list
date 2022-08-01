import React from 'react';
import Todo from './Todo';
import './TodoList.css';

function TodoList({ todos, handleDelete, handleEdit }) {
  return (
    <div className="todo-list-container">
      <div className="header-container">
        <div>Description</div>
        <div>Edit</div>
        <div>Delete</div>
      </div>
      <ul className="todos-container">
        {todos.map(todo => <Todo key={todo.todo_id} id={todo.todo_id} desc={todo.description} handleDelete={handleDelete} handleEdit={handleEdit} />)}
      </ul>
    </div>
  );
}

export default TodoList;
