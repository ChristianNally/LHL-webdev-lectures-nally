const express = require('express');
const app = express();

//
// Database
//
const todos = [
  {description: 'loaf of bread'},
  {description: 'container of milk'},
  {description: 'stick of butter'},
];

app.get('/json', (req,res) => {
  res.json(todos);
});

app.listen(8088, () => console.log(`Server is listening on 8088`));