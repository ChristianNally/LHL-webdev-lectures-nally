//
// SPOT Back-end
//
const cookieSession = require('cookie-session');
const express = require("express");
const morgan = require("morgan");
const crypto = require("crypto"); // used to generate random strings
const bcrypt = require("bcrypt");
var bodyParser = require("body-parser");

// local require for DB API
const dbFns = require("./db/queries");

// someone set us up the express app
const app = express();
app.set("view engine", "ejs");

// this object stores any given cohort's current understanding feedback
// this data is VERY emphemeral on purpose
const understanding = {};

//
// Middleware
//
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(cookieSession({
  name: 'session',
  keys: ['qhd7h3f09js83nnc9', 'aovjhaw48hofgraoh8']
}));

//
// Login
//
app.get('/login',(req,res)=>{
  uid = crypto.randomBytes(20).toString('hex');
  res.cookie("spot-uid", uid);
  res.redirect("/student/14");
});

app.post('/login',(req,res)=>{
  const candidateEmail = req.body.email;
  const candidatePassword = req.body.password;

  dbFns.getUserByEmail(candidateEmail, (rows)=>{
    if (typeof rows[0].email !== 'undefined'
        && bcrypt.compare(candidatePassword, rows[0].password)
    ){
      // Log the user in by creating a cookie with the email stored in it.
      req.session.email = candidateEmail;
      res.redirect("/days");
      return;
    }
  });

});

//
// Register
//
app.get('/register',(req,res)=>{
  res.render("register");
});

app.post('/register',(req,res)=>{
  const newEmail = req.body.email;
  const newPassword = req.body.password;

  dbFns.getUserByEmail(newEmail, (rows)=>{
    if (typeof rows[0] !== 'undefined'){
      res.redirect('/register');
      return;
    } else {
      const newPasswordHashed = bcrypt.hashSync(newPassword,10);
      const newUser = {email: newEmail, hashedPassword: newPasswordHashed};
      dbFns.insertUser(newUser);
      req.session.email = newEmail; // logs the user in.
      res.redirect('/days');
      return;
    }
  });    

});

app.get('/logout',(req,res)=>{
  req.session = null;
  res.redirect('/');
});

//
// BREAD ROUTES for understanding
//
app.get("/understanding", (req, res) => {
  console.log('understanding:',understanding);
  res.json(understanding);
});

app.get("/understanding/:objective_id/:user_id/:understanding_id",(req,res)=>{
  const objective_id = req.params.objective_id;
  const user_id = req.params.user_id;
  const understanding_id = req.params.understanding_id;
  console.log('understanding before:',understanding);
  if ('undefined' !== typeof understanding[objective_id]){
    understanding[objective_id][user_id] = understanding_id;
  } else {
    understanding[objective_id] = {};
    understanding[objective_id][user_id] = understanding_id;
  }

  console.log('understanding after:',understanding);
  res.json(understanding);
});

//
// BREAD ROUTES for Days
//
app.get("/", (req, res) => {
  res.render("home");
});

// Browse Days
app.get("/days", (req, res) => {
  dbFns.getAllDays((rows) => {
    res.render("days", { days: rows });
  });
});

// STUDENT READ
app.get("/student/:id", (req, res) => {
  dbFns.getDay(req.params.id, (rows) => {
    dbFns.getDayMnemonic(req.params.id, (row) => {
      //      console.log('row[0].day_mnemonic:',row[0].day_mnemonic);
      res.render("student", {
        day_id: req.params.id,
        objectives: rows,
        day_mnemonic: row[0].day_mnemonic,
      });
    });
  });
});

function understandString(id){
  let totalOne = 0;
  let totalTwo = 0;
  let totalThree = 0;
  if ('undefined' !== typeof understanding[id] ){
    for (const property in understanding[id]) {
//      console.log(`${property}: ${understanding[id][property]}`);
      if ("1" === understanding[id][property]){
        totalOne += 1;
      }
      if ("2" === understanding[id][property]){
        totalTwo += 1;
      }
      if ("3" === understanding[id][property]){
        totalThree += 1;
      }
}
//    console.log("understanding[id]",understanding[id]);
    return `${totalOne}::${totalTwo}::${totalThree}`;
  } else {
    return "blah";
  }
}

// ADMIN READ
app.get("/days/:id", (req, res) => {
  dbFns.getDay(req.params.id, (rows) => {
    rows.forEach((obj)=>{ obj.understandString = understandString(obj.id); });
    console.log('rows:',rows);
    dbFns.getDayMnemonic(req.params.id, (row) => {
      //      console.log('row[0].day_mnemonic:',row[0].day_mnemonic);
      res.render("day", {
        day_id: req.params.id,
        objectives: rows,
        day_mnemonic: row[0].day_mnemonic,
      });
    });
  });
});

// READ and EDIT
app.get("/days-edit/:id", (req, res) => {
  dbFns.getDay(req.params.id, (rows) => {
    dbFns.getDayMnemonic(req.params.id, (row) => {
      console.log("row[0].day_mnemonic:", row[0].day_mnemonic);
      res.render("day-edit", {
        day_id: req.params.id,
        objectives: rows,
        day_mnemonic: row[0].day_mnemonic,
      });
    });
  });
});

//
// "BREAD" ROUTES for Objectives
//

// BROWSE
app.get("/browse", (req, res) => {
  dbFns.getAllObjectives((rows) => {
    const templateVars = { objectives: rows };
    res.render("browse", templateVars);
  });
});

// READ

// EDIT
app.get("/edit/:id", (req, res) => {
  dbFns
    .getObjectiveById(req.params.id)
    .then((result) => {
      console.log("result:", result);
      res.render("edit", result);
      res.end();
    })
    .catch((err) => console.log("getObjectiveById err:", err));
});

app.post("/edit", (req, res) => {
  console.log("req.body:", req.body);
  const objectiveUpdate = {
    id: req.body.id,
    type: req.body.type,
    question: req.body.question,
    answer: req.body.answer,
    sort: req.body.sort,
    day_id: req.body.day_id,
  };
  dbFns.updateObjective(objectiveUpdate);
  res.redirect("/");
});

// ADD
app.get("/new", (req, res) => {
  res.render("new");
});

app.get("/new/:day_id", (req, res) => {
  res.render("new", { day_id: req.params.day_id });
});

app.post("/new", (req, res) => {
  console.log("req.body:", req.body);
  const newObjective = {
    type: req.body.type,
    question: req.body.question,
    answer: req.body.answer,
    sort: req.body.sort,
    day_id: req.body.day_id,
  };
  dbFns.insertObjective(newObjective);
  res.redirect("/");
});

// DELETE
app.get("/delete/:id", (req, res) => {
  dbFns.deleteObjective(req.params.id);
  res.redirect("/");
});

// REORDER
//
app.post("/neworder", (req, res) => {
  console.log("/neworder req.body:", req.body);
  const nameOfArray = "objective[]";
  for (key in req.body[nameOfArray]) {
    console.log("key::value", key, "::", req.body[nameOfArray][key]);
    let newOrder = { id: req.body[nameOfArray][key], sort: key };
    dbFns.setObjectiveSortOrder(newOrder);
  }
  res.send("reordered");
  res.end();
});

// Server Listen Event Handler
//

const port = process.env.PORT || 7865;
app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
