import React, { useRef } from 'react';
import './InputSection.css';

function InputSection({ handleAddTodo }) {
  const inputEl = useRef();

  function helper() {
    const desc = inputEl.current.value;
    if (desc !== '') {
      handleAddTodo(inputEl.current.value);
      inputEl.current.value = '';
    }
  }

  return (
    <div className="input-container">
      <h1>Input Todo</h1>
      <div className="add-section">
        <input className="text-field" ref={inputEl} type="text" placeholder="Add todo" />
        <button className="add-button" onClick={() => helper()} type="button">Add</button>
      </div>
    </div>
  );
}

export default InputSection;
