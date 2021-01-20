//
// DO NOT USE THIS CODE
// IT WILL HAVE A SERIOUS SECURITY ISSUE, WHICH IS LEFT IN ON PURPOSE, FOR TEACHING PURPOSES
//

const express = require("express");
const PORT = 8080;

const app = express();

app.set("view engine", "ejs");

//
// MIDDLEWARE
//

//
// ROUTES
//

// homepage
app.get("/", (req, res) => {
  res.render("homepage");
});

// register page

// register submit handler

// login

// login submit handler

// profile page

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
