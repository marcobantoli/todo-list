const express = require('express');
const pool = require('./db.js');

const app = express();
const PORT = 3001;

const query = async() => {
  const todos = await pool.query('SELECT * FROM todo');
  console.log(todos);
};

query();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
