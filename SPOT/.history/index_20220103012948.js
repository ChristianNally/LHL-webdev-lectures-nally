//
// SPOT Back-end
//
const cookieSession = require('cookie-session');
const express = require("express");
const morgan = require("morgan");
const crypto = require("crypto"); // used to generate random strings
const bcrypt = require("bcrypt");
var bodyParser = require("body-parser");
const cors = require('cors');

const https = require('https');
const fs = require('fs');

const log4js = require("log4js");
// define the logger
const logger = log4js.getLogger();
logger.level = "fatal"; // default level is OFF - which means no logs at all.
// ALL < TRACE < DEBUG < INFO < WARN < ERROR < FATAL < MARK

// local require for DB API
const dbFns = require("./db/queries");

// someone set us up the parts
const app = express();
app.set("view engine", "ejs");
app.disable('view cache'); // my register page was caching the header email/login form
app.disable('etag'); // this was suggested here and is NOT working https://stackoverflow.com/questions/18811286/nodejs-express-cache-and-304-status-code

// this object keeps a list of all the currently logged in users
// a user is added to the list whenever we recieve a request from any user
// and they're not in this list
const loggedInUsers = {};

// this object stores a memory version of the understanding feedback
// this data is VERY emphemeral on purpose, and it also only permits one understanding level per user
const understandingLOL = {};

// get all of the understanding table // is it better to keep a copy in memory?
dbFns.getAllUnderstandings((rows)=>{
  rows.forEach((row) => {
    if ( !( 'undefined' !== typeof understandingLOL[row.objective_id] ) ){
      understandingLOL[row.objective_id] = {};
    }
    understandingLOL[row.objective_id][row.user_id] = row.level;  
  });
});

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
app.use(cors());

// for every request, update the most recent request 
// for that user in our list of loggedInUsers
app.use('*', (req,res,next) => {
  if (req.session.email) {
    logger.debug("req.session.email",req.session.email);
    if(email = loggedInEmail(req)){
      logger.debug("email",email);
      loggedInUsers[email] = Date.now();
      logger.debug(loggedInUsers);
    }
  } else {
    logger.debug("req.session.email is falsey", req.session.email);
  }
  next();
});

app.use('/logintoken', (req, res) => {
  res.send({
    token: 'test123'
  });
});

//
// Login
//
function loggedInEmail(req){
  // Here's how to use loggedInEmail
  // const userEmail = loggedInEmail(req);
  // if(userEmail){
  //   // DO PROTECTED STUFF IN HERE
  //   return;
  // }
  // res.redirect('/register');
  if (req.session.email){
    logger.debug(`${req.session.email} is logged in.`);
    return req.session.email;
  }
  return false;
}

// currently targeted by the form in the header
app.post('/login',(req,res) => {
  const candidateEmail = req.body.email;
  const candidatePassword = req.body.password;

  dbFns.getUserByEmail(candidateEmail, (rows) => {
    if (typeof rows[0] !== 'undefined'){
      if (bcrypt.compare(candidatePassword, rows[0].password)){
        logger.debug('password is correct');
        logger.debug(`rows[0]=${JSON.stringify(rows[0])}`);
        req.session.email = candidateEmail;
        req.session.user = rows[0];
        return res.redirect("/student/21");
      } else {
        logger.debug('password is incorrect');
        return res.write('password is incorrect');
      }
    } else {
      logger.debug('no matching email address');
      return res.redirect("/register");
    }
  });
});

//
// Register
//
app.get('/register',(req,res) => {
  const templateVars = {
    email: loggedInEmail(req)
  };
  res.render("register",templateVars);
});

app.post('/register',(req,res) => {
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
      res.redirect('/');
      return;
    }
  });    

});

//
// Logout
//
app.post('/logout',(req,res) => {
  logger.debug('user attempting to log out');
  let debugValue = loggedInEmail(req);
  if(debugValue){
    logger.debug('loggedInEmail(req) returned a truthy value',debugValue);
    req.session = null;
  }
  logger.debug('about to redirect to homepage');
  res.redirect('/');
});

app.get("/loggedInUsers", (req, res) => {
  if (true){
    logger.debug('loggedInUsers:',loggedInUsers);
    res.json(loggedInUsers);
  } else {
    res.write('permission denied');
  }
});

//
// BREAD ROUTES for understanding
//
app.get("/understanding", (req, res) => {
  if (true){
    logger.debug('understanding:',understandingLOL);
    res.json(understandingLOL);
  } else {
    res.write('permission denied');
  }
});

//
// Here is how an individual submits their feedback
//
app.get("/understanding/:objective_id/:level",(req,res)=>{
  const objective_id = req.params.objective_id;
  const email = req.session.email;

  dbFns.getUserByEmail(email, (rows)=>{
    if (rows.length && typeof rows[0].email !== 'undefined'){
      logger.debug("rows[0]",rows[0]);
      // we have a valid user
      const user_id = rows[0].id;
      const level = req.params.level;
    
      if ( !( 'undefined' !== typeof understandingLOL[objective_id] ) ){
        understandingLOL[objective_id] = {};
      }
    
      understandingLOL[objective_id][user_id] = level;
      const newUnderstanding = {
        user_id: user_id,
        objective_id: objective_id,
        understanding_id: level
      };
      dbFns.insertUnderstanding(newUnderstanding);
    
      logger.debug('understanding after:',understandingLOL);
      res.json(understandingLOL);
      return;
    } else {
      logger.debug('user not logged in. no understanding permitted.');
    }
  });
});

//
// BREAD ROUTES for Days
//
app.get("/", (req, res) => {
  res.redirect("/days");
});

// Browse Days
app.get("/days", (req, res) => {
  const userEmail = loggedInEmail(req);
  if(userEmail){
    dbFns.getAllDays((rows) => {
      res.render("days", { days: rows, email: userEmail });
    });
    return;
  }
  res.redirect('/register');
});

// STUDENT READ
app.get("/student/:id", (req, res) => {
  dbFns.getDay(req.params.id, (rows) => {
    dbFns.getDayDetails(req.params.id, (row) => {
      //      logger.debug('row[0].day_mnemonic:',row[0].day_mnemonic);
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
  if ('undefined' !== typeof understandingLOL[id] ){
    for (const property in understandingLOL[id]) {
//      logger.debug(`${property}: ${understanding[id][property]}`);
      if ("1" === understandingLOL[id][property]){
        totalOne += 1;
      }
      if ("2" === understandingLOL[id][property]){
        totalTwo += 1;
      }
      if ("3" === understandingLOL[id][property]){
        totalThree += 1;
      }
}
//    logger.debug("understanding[id]",understanding[id]);
    return `${totalOne}::${totalTwo}::${totalThree}`;
  } else {
    return "none";
  }
}

// ADMIN READ
app.get("/days/:id", (req, res) => {
  const userEmail = loggedInEmail(req);
  if(userEmail){
    dbFns.getDay(req.params.id, (rows) => {
      rows.forEach((obj)=>{ obj.understandString = understandString(obj.id); });
//      logger.debug('rows:',rows);
      dbFns.getDayDetails(req.params.id, (row) => {
        //      logger.debug('row[0].day_mnemonic:',row[0].day_mnemonic);
        res.render("day", {
          day_id: req.params.id,
          objectives: rows,
          day_mnemonic: row[0].day_mnemonic,
          title: row[0].title,
          email: userEmail
        });
      });
    });
    return;
  } else { // not logged in
    res.redirect('/register');
    return;
  }
});

// READ and EDIT
app.get("/days-edit/:id", (req, res) => {
  if (req.session.user.admin){
    dbFns.getDay(req.params.id, (rows) => {
      dbFns.getDayDetails(req.params.id, (row) => {
        logger.debug("row[0].day_mnemonic:", row[0].day_mnemonic);
        res.render("day-edit", {
          day_id: req.params.id,
          objectives: rows,
          day_mnemonic: row[0].day_mnemonic,
          title: row[0].title,
          email: userEmail
        });
      });
    });
    return;
  } else { // not logged in
    res.redirect('/register');
    return;
  }
});

app.post("/day-edit", (req, res) => {
  if (req.session.user.admin){
    logger.debug("req.body:", req.body);
    const dayUpdate = {
      id: req.body.id,
      day_mnemonic: req.body.day_mnemonic,
      title: req.body.title
    };
    dbFns.updateDay(dayUpdate);
    res.redirect("/days-edit/"+dayUpdate.id);
  } else {
    res.write("permission denied");
  }
});

//
// "BREAD" ROUTES for Objectives
//

// BROWSE
app.get("/browse", (req, res) => {
  const userEmail = loggedInEmail(req);
  if(userEmail){
    dbFns.getAllObjectives((rows) => {
      const templateVars = { objectives: rows, email: userEmail };
      res.render("browse", templateVars);
    });
    return;
  }
  res.redirect('/register');
});

app.get("/json",(req,res) => {
//  const userEmail = loggedInEmail(req);
//  if(userEmail){
    dbFns.getAllObjectives((rows) => {
      res.json(rows);
    });
    return;
//  }
});

// READ
// EDIT
app.get("/edit/:id", (req, res) => {
  if (req.session.user.admin){ 
    dbFns.getObjectiveById(req.params.id)
    .then((result) => {
      logger.debug("result:", result);
      res.render("edit", result);
      res.end();
    })
    .catch((err) => logger.debug("getObjectiveById err:", err));
  } else {
    res.write('permission denied');
  }
});

app.post("/edit", (req, res) => {
  if (req.session.user.admin){
    logger.debug("req.body:", req.body);
    const objectiveUpdate = {
      id: req.body.id,
      type: req.body.type,
      question: req.body.question,
      answer: req.body.answer,
      sort: req.body.sort,
      day_id: req.body.day_id,
    };
    logger.debug("objectiveUpdate:",objectiveUpdate);
    dbFns.updateObjective(objectiveUpdate);
    res.redirect("/days");
  } else {
    res.write('permission denied');
  }
});

// ADD
app.get("/new", (req, res) => {
  if (req.session.user.admin){
    const userEmail = loggedInEmail(req);
    res.render("new",{email: userEmail});
    return;
  }
  res.redirect('/register');
});

app.get("/new/:day_id", (req, res) => {
  if (req.session.user.admin){
    const userEmail = loggedInEmail(req);
    res.render("new", { day_id: req.params.day_id });
    return;
  }
  res.redirect('/register');
});

app.post("/new", (req, res) => {
  if (req.session.user.admin){
    const userEmail = loggedInEmail(req);
    if(userEmail){
      logger.debug("req.body:", req.body);
      const newObjective = {
        type: req.body.type,
        question: req.body.question,
        answer: req.body.answer,
        sort: req.body.sort,
        day_id: req.body.day_id,
      };
      dbFns.insertObjective(newObjective);
      res.redirect("/days");
      return;
    }
    res.redirect('/register');
  } else {
    res.write('permission denied');
  }
});

// DELETE
app.get("/delete/:id", (req, res) => {
  if (req.session.user.admin){
    dbFns.deleteObjective(req.params.id);
    res.redirect("/");
  } else {
    res.write('permission denied');
  }
});

// REORDER
//
app.post("/neworder", (req, res) => {
  if (req.session.user.admin){
    logger.debug("/neworder req.body:", req.body);
    const nameOfArray = "objective[]";
    for (key in req.body[nameOfArray]) {
      logger.debug("key::value", key, "::", req.body[nameOfArray][key]);
      let newOrder = { id: req.body[nameOfArray][key], sort: key };
      dbFns.setObjectiveSortOrder(newOrder);
    }
    res.send("reordered");
    res.end();
  } else {
    res.write('permission denied');
  }
});

// Server Listen Event Handler
//

const port = process.env.PORT || 7865;

const httpsOptions = {
  key: fs.readFileSync('./key.pem'),
  cert: fs.readFileSync('./cert.pem')
}

const server = https.createServer(httpsOptions, app).listen(port, () => {
  console.log('server running at ' + port)
});

// app.listen(port, () => {
//   logger.debug(`app is listening on port ${port}`);
// });
