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
  res.status(200).render('home'); // send views/home.ejs as the response
});

// have the app listen on the port
app.listen(port,console.log(`Server is listening on port ${port}`));
