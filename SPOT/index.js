const express = require('express');
var bodyParser = require('body-parser')

const app = express();
app.set('view engine', 'ejs');

const dbFns = require('./db/queries');

//
// Middleware
//
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
//
// "BREAD" ROUTES
//

// BROWSE
//
app.get('/', (req, res) => {
  console.log("entered get#/");
  dbFns.getAllObjectives((rows) => {
    const templateVars = {objectives: rows};
    res.render('index',templateVars);
  });
});

// READ
// getObjectiveById

// EDIT
//

// ADD
//
app.get('/new', (req, res) => {
  res.render('new');
});

app.post("/new",(req,res)=>{
  console.log("req.body:",req.body);
  const newObjective = {
    type: req.body.type,
    question: req.body.question,
    answer: req.body.answer,
    sort: req.body.sort,
    day_id: req.body.day_id
  }
  dbFns.insertObjective(newObjective);
  res.redirect("/");
});

const port = process.env.PORT || 7865;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
