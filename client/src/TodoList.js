import React from 'react'
import Todo from './Todo';

function TodoList() {
  return (
    <>
      <div>Description</div>
      <div>Edit</div>
      <div>Delete</div>
      <ul>
        <Todo />
      </ul>
    </>
  );
}

export default TodoList;
