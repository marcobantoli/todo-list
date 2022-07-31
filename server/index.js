const express = require('express');
const pool = require('./db.js');

const app = express();
app.use(express.json());
const PORT = 3001;

// Create
app.post('/todos', async (req, res) => {
  try {
    const description = req.body.description;
    const newTodo = await pool.query('INSERT INTO todo(todo_id, description) VALUES(DEFAULT, $1) RETURNING *', 
      [description]);
    res.json(newTodo.rows[0]);
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
app.put('/todos/:id', async (req, res) => {
  try {
    const description = req.body.description;
    const id = req.params.id;
    await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id]);
    res.json('Todo was updated!');
  } catch (err) {
    console.log(err);
  }
});

// Delete
app.delete('/todos/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await pool.query('DELETE FROM todo WHERE todo_id=$1', [id]);
    res.json('Todo was deleted!');
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
