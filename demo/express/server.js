const express = require('express');
const port = 3000;
const db = require('./db/todos');
const bodyParser = require('body-parser');

// create an express app
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// use the ejs template engine
app.set('view engine','ejs');

// routes are sequential. if the app finds one that matches, it will use that one.
app.get('/',(req,res)=>{
  res.status(200).render('index'); // send views/index.ejs as the response
});

app.get('/todos',(req,res)=>{
  res.json(db);
});

app.post('/todos',(req,res)=>{
  // extract the content from the body of the 
  // request, using the body-parser middleware
  console.log(req.body);

  // create a new todo object
  const newTodo = req.body;

  // generate the ID
  newTodo.id = Math.random().toString(36).substring(2,8);

  // push the new TODO onto the DB
  db.push(newTodo);

  // ask the browser to redirect to the TODOs list
  res.redirect('/todos');
});

app.get('*',(req,res)=>{
  console.log('404 route called.');
  res.status(404).render('404');
  res.end();
});

// have the app listen on the port
app.listen(port,console.log(`Server is listening on port ${port}`));
