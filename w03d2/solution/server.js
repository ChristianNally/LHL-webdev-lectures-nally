const PORT = 8086;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

//
// Here are the resources we will be managing: "Learning Objectives"
//

const objectives = [
  {question: "Why EJS Templates?", answer: "We use templates to separate business logic from the presentation layer."},
  {question: "How do we implement EJS Templates?", answer: "npm i ejs, mkdir views, app.set('view engine', 'ejs');"},
  {question: "What does CRUD stand for?", answer: "Create, Read, Update, Delete"},
  {question: "Where are URL parameters stored?", answer: "req.params"},
  {question: "Where are <form> values stored?", answer: "req.body"}
];

// //
// //  MIDDLEWARE
// //

app.use(express.static('public'));
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));

//
// ROUTES
//

app.get("/", (req, res) => {
//  res.render('home');
    res.redirect('/objectives');
});

// //
// // CREATE
// //

// this route must come first to avoid new = :id below
app.get("/objectives/new",(req,res)=>{ 
  res.render("new");
});

app.post("/objectives",(req,res)=>{

  const newQuestion = req.body.question;
  const newAnswer = req.body.answer;

  objectives.push({question: newQuestion, answer: newAnswer});

  // const keys = Object.keys(objectives).map(x=>+x);
  // let last_element = keys[keys.length - 1];
  // // console.log("keys",keys);
  // // console.log("last_element",last_element);
  // // console.log("req.body",req.body);
  // objectives[++last_element] = {
  //   question: req.body.question,
  //   answer: req.body.answer
  // }
  res.redirect("/objectives");
});

//
// READ (show all the objectives)
//

app.get("/objectives", (req,res) => {
  const templateVars = {
    listOfObjectives: objectives,
    blah: "foobar" 
  };
  res.render('index', templateVars);
});

// //
// // READ (show an individual objective)
// //
// app.get("/objectives/:id",(req,res)=>{
//   const templateVars = {id: req.params.id, lo: objectives[req.params.id]};
//   res.render('objective', templateVars);
// });

//
// UPDATE (edit aspects of an objective)
//

app.get('/objectives/:id', (req,res) => {

  const id = req.params.id;
  const objective = objectives[id];
  const templateVars = {
    id, // id: id,
    objective // objective: objective
  };

  res.render('edit', templateVars);
});

app.post("/objectives/:id",(req,res)=>{
  const id = req.params.id; // URL tokens are stored in req.params

  const newQuestion = req.body.question;
  const newAnswer = req.body.answer;

  objectives[id] = {
    question: newQuestion,
    answer: newAnswer
  };
  res.redirect('/objectives');
});

//
// DELETE (delete an individual objective)
//
app.get("/objectives/:id/delete",(req,res)=>{
  const idToDelete = req.params.id;
  delete objectives[idToDelete];
  res.redirect("/objectives");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
