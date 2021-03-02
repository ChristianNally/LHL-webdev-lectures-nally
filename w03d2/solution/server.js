const PORT = 8080;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');


//
// Here are the resources we will be managing: "Learning Objectives"
//

const objectives = {
  1: {question: "Why EJS Templates?", answer: "We use templates to separate business logic from the presentation layer."},
  2: {question: "How do we implement EJS Templates?", answer: "npm i ejs, mkdir views, app.set('view engine', 'ejs');"},
  3: {question: "What does CRUD stand for?", answer: "Create, Read, Update, Delete"},
  4: {question: "Where are URL parameters stored?", answer: "req.params"},
  5: {question: "Where are <form> values stored?", answer: "req.body"}
}

//
//  MIDDLEWARE
//

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));

//
// ROUTES
//

app.get("/", (req, res) => {
//  res.render('home');
    res.redirect('/objectives');
});

//
// CREATE
//

// this route must come first to avoid new = :id below
app.get("/objectives/new",(req,res)=>{ 
  res.render("new");
});

app.post("/objectives",(req,res)=>{
  const keys = Object.keys(objectives).map(x=>+x);
  let last_element = keys[keys.length - 1];
  // console.log("keys",keys);
  // console.log("last_element",last_element);
  // console.log("req.body",req.body);
  objectives[++last_element] = {
    question: req.body.question,
    answer: req.body.answer
  }
  res.redirect("/objectives");
});

//
// READ (show all the objectives)
//
app.get("/objectives",(req,res)=>{
  const templateVars = {lo: objectives};
  res.render('index', templateVars);
});

//
// READ (show an individual objective)
//
app.get("/objectives/:id",(req,res)=>{
  const templateVars = {id: req.params.id, lo: objectives[req.params.id]};
  res.render('objective', templateVars);
});

//
// UPDATE (edit aspects of an objective)
//
app.post("/objectives/:id",(req,res)=>{
  const templateVars = {id: req.params.id, lo: objectives[req.params.id]};
  res.render('objective', templateVars);
});

//
// DELETE (delete an individual objective)
//
app.post("/objectives/:id/delete",(req,res)=>{
  const idToDelete = req.params.id;
  delete objectives[idToDelete];
  res.redirect("/objectives");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
