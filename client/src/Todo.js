import React, { useState, useRef } from 'react'
import './Todo.css';

function Todo({ id, desc, handleDelete, handleEdit }) {
  const [isEditing, setIsEditing] = useState(false);

  function helper(e) {
    if (e.keyCode === 13 && e.target.value !== '') {
      handleEdit(id, e.target.value, setIsEditing);
    }
  }

  return (
    <li className="todo-container">
      {isEditing ? <input className="edit-text-field" defaultValue={desc} onKeyDown={helper} type="text" /> : <div className="description">{desc}</div>}
      <button className="edit-button" type="button" onClick={() => setIsEditing(true)}>Edit</button>
      <button className="del-button" type="button" onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
}

export default Todo;
