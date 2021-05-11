//
// SPOT Back-end
//

const express = require("express");
const morgan = require("morgan");
const crypto = require("crypto");
var bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs");

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const dbFns = require("./db/queries");

const understanding = {};

//
// Middleware
//
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//
// LOGIN
//
app.get('/login-student',(req,res)=>{
  uid = crypto.randomBytes(20).toString('hex');
  res.cookie("spot-uid", uid);
  res.redirect("/student/12");
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
