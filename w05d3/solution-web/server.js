require('dotenv').config();

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

const dbFns = require('./db/queries');

app.get('/', (req, res) => {
  dbFns.getAllObjectives((rows) => {
    const templateVars = {objectives: rows};
    res.render('index',templateVars);
  });
});

app.get('/new', (req, res) => {
  res.render('new');
});

const port = process.env.PORT || 7865;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
