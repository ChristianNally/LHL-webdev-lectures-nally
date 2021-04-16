const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');

const dbFns = require('./db/queries');

//
// Middleware
//
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'));

//
// ROUTES for Days
//

// BROWSE
app.get('/days', (req, res) => {
  dbFns.getAllDays((rows) => {
    res.render('days',{days: rows});
  });
});

// READ
app.get('/days/:id', (req, res) => {
  dbFns.getDay(req.params.id, (rows) => {
    res.render('day',{day_mnemonic: req.params.id, objectives: rows});
  });
});

//
// "BREAD" ROUTES for Objectives
//

// BROWSE
app.get('/', (req, res) => {
  dbFns.getAllObjectives((rows) => {
    const templateVars = {objectives: rows};
    res.render('index',templateVars);
  });
});

// READ

// EDIT

// ADD
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

// DELETE
app.post("/delete/:id",(req,res) => {
  dbFns.deleteObjective(req.params.id);
  res.redirect("/");
});

const port = process.env.PORT || 7865;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
