//
// DO NOT USE THIS CODE
// IT WILL HAVE A SERIOUS SECURITY ISSUE, WHICH IS LEFT IN ON PURPOSE, FOR TEACHING PURPOSES
//

const express = require("express");
const bodyParser = require("body-parser"); // for FORM values

// why do we need cookies?
// so that, after logging in, subsequent http requests can be associated 
// with previous requests via the value stored on the browser
// (http itself is 'stateless')
const cookieParser = require("cookie-parser");

const PORT = 8080;

const app = express();
app.set("view engine", "ejs");

//
// Users object (i.e. a fake Database)
//
let users = {'nally': "qwerty"};

//
// MIDDLEWARE
//

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//
// ROUTES
//

// homepage
app.get("/", (req, res) => {
  res.render("homepage");
});

// register page
app.get("/register", (req, res) => {
  res.render("register");
});

// register submit handler
app.post("/register", (req,res)=>{
  console.log("req.body",req.body); // this contains FORM data
  users[req.body.username] = req.body.password;
  console.log(JSON.stringify(users));
  res.cookie("user",req.body.username);
  res.redirect("/profile");
});

// login
app.get("/login", (req, res) => {
  res.render("login");
});

// let users = {'nally': "qwerty"};
// login submit handler
app.post("/login", (req,res)=>{
  console.log("req.body",req.body); // this contains FORM data

  // the following two lines establish convenience variables from the form data.
  let candidateName = req.body.username;
  let candidatePassword = req.body.password;

  if (users[candidateName] && users[candidateName] === candidatePassword){
    console.log("success! login is nigh");
    res.cookie("user",candidateName);
    res.redirect("/profile");
  } else {
    res.redirect("/login");
  }
});

// profile page
app.get("/profile", (req, res) => {
  // check to see whether the user is logged in
  console.log("req.cookies:",req.cookies);
  let username = req.cookies.user;
  let password = users[username];
  if (users[username]){ // we will use this as the check of whether they are authenticated
    console.log("Truth!");
    const templateVars = {user: username, password: password};
    res.render("profile",templateVars);
  } else {
    res.redirect("/login");
  }

});

// logout page

// logout submit handler

// 404
app.get('*',(req,res)=>{
  res.status(404);
  res.render('404');
});

//
// SET THE APP TO LISTENIN' AND EXIT THE MAIN THREAD
//
app.listen(PORT, "localhost", () => {
  console.log(`Server is listening on ${PORT}`);
});
