const express = require('express');
const pool = require('./db.js');

const app = express();
const PORT = 3001;

// Create
app.post('/todos', async (req, res) => {
  try {
    const description = req.body.description;
    const newTodo = await pool.query('INSERT INTO todo(todo_id, description) VALUES(DEFAULT, $1)', [description]);
    res.json(newTodo);
  } catch (err) {
    console.log(err);
  }
});

// Read
app.get('/todos', async (req, res) => {
  try {
    const todos = await pool.query('SELECT * FROM todo');
    res.json(todos.rows);
  } catch (err) {
    console.log(err);
  }
});

// Update

// Delete

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
