require('dotenv').config();

const express = require('express');
const app = express();
app.set('view engine', 'ejs');

// const router = require('./routes/router');
// app.use('/objectives', router);

const dbFns = require('./db/queries');

app.get('/', (req, res) => {
  dbFns.getAllObjectives((objectives) => {
    const templateVars = {objectives: objectives};
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
