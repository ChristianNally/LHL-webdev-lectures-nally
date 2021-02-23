const express = require("express");
const bodyParser = require("body-parser");
const PORT = 8081;

const app = express();
app.set('view engine','ejs');

const objectives = {
    1: {question: "What does CRUD stand for?", answer: "Create. Read. Update. Delete."},
    2: {question: "How do we implement EJS Templates", answer: "npm i ejs, mkdir views, app.set(), etc."},
    3: {question: "Where are URL parameters stored?", answer: "req.params"},
    4: {question: "Where are <form> values stored?", answer: "rec.body"},
}

//
// Middleware
//
app.use(bodyParser.urlencoded({extended: false}));

//
// ROUTES
//

app.get('/',(req,res)=>{
    console.log("Homepage");
    res.send("Hello World!");
});

//
// CREATE
//
app.get('/objectives/new',(req,res)=>{
    res.render("new"); // this is where the HTML is sent to the browser
});

app.post('/objectives/new',(req,res)=>{
    console.log(req.body);   
    objectives[9] = {question: req.body.question, answer: req.body.answer};
    res.redirect("/objectives");
});

//
// READ
//

app.get('/objectives',(req,res)=>{
    const templateVars = {minkeyfuzz: objectives};
    res.render("index", templateVars); // this is where the HTML is sent to the browser
});

app.get('/objectives/:id',(req,res)=>{
    console.log("req.params:",req.params);
    const question = objectives[req.params.id].question;
    const answer = objectives[req.params.id].answer;
    const templateVars = {question: question, answer: answer};
    res.render("objective",templateVars); // this is where the HTML is sent to the browser
});

//
// UPDATE
//

app.get('/objectives/:id/update-form',(req,res)=>{
    const templateVars = {
        id: req.params.id, 
        question: objectives[req.params.id].question, 
        answer: objectives[req.params.id].answer
    };
    res.render("update",templateVars);
});

app.post('/objectives/:id/update',(req,res)=>{
    // console.log(req.body);
    // console.log(req.params.id);
    objectives[req.params.id].question = req.body.question;
    objectives[req.params.id].answer = req.body.answer;
    res.redirect("/objectives");
});

//
// DELETE
//
app.post('/objectives/:id/delete',(req,res)=>{
    console.log("i want to delete this id:",req.params.id);
    // we use [] syntax to transform a variable value into an object key name.
    delete objectives[req.params.id];
    res.redirect("/objectives");
});

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});
