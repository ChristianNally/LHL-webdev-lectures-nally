# CRUD with Express

[] Set up the basics of an express server, including a simple response
[] EJS templates. Why? Because...
* separation of business logic from the presentation layer
* we would like to include simple display logic (JS) within the presentation layer
[] How? EJS template engines (npm i ejs, mkdir views, app.set('view engine', 'ejs');)
[] With EJS templates, the HTML is (built, compiled, created) dynamically on the back-end.
[] If you only modify ejs files, you do not need to rerun your server.

# CRUD

[] Create
[] Read
[] Update
[] Delete

Let's make CRUD routes to help us manage a list of learning objectives.

# CRUD with Express

[] RESTful convention: [https://restfulapi.net/resource-naming/](https://restfulapi.net/resource-naming/) 

app.get('/index', (req,res) => {
  //....
})

[] You can take a parameter on a route's URL via req.params where the path has a colon in it.
[] Connect the index list of objectives to each individual objective detail page via a link.

# REST

REST means that the path that we are going to should represent the data being transferred. An API that uses the REST convention is said to be RESTful.

"RESTful routes provides a design pattern that allows for easy data manipulation. It's nicer for users and nicer for developers to have everything consistent. A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete)." - Google Search for Why Restful Routing.)

Let say we need to make all CRUD routes, for objectives.

app.get('/objectives', (req,res) => {
  //GET ALL THE objectives
})
app.get('/objectives/new', (req,res) => {
  //GET A FORM TO CREATE A NEW MEME
})

app.post('/objectives', (req,res) => {
  // TAKE THE INFORMATION FROM A FORM
  // AND SAVE IT ( POST saves )
})

app.get('/objectives/:id', (req,res) => {
  //SHOW A SPECIFIC MEME
})

app.post('/objectives/:id', (req,res) => {
  //EDIT and SAVE the SEPCIFIC MEME
})


app.post('/objectives/:id/delete', (req,res) => {
  //DELETE A SPECIFIC MEME
})

# Routes

A route is made up of a VERB and a PATH.

Verbs: GET, POST, PUT, PATCH, DELETE

We used only GET and POST to achieve the CRUD routes.

# Cookies

We did a quick look on cookies.

"an HTTP cookie is a small piece of data sent from a website and stored on the user's computer by the user's web browser while the user is browsing. Cookies were designed to be a reliable mechanism for websites to remember stateful information or to record the user's browsing activity." - WikiPedia

# Middleware

Middleware is a subset of chained functions called by the Express js routing layer before the user-defined handler is invoked. Middleware functions have full access to the request and response objects and can modify either of them.

Basic of explanation is, you plug your middleware into your express, and it happens when any (or specific) request has come from the client.

# Useful Middleware

Morgan - HTTP request logger middleware for node.js

Nodemon - Restarts the node application when file changes in the directory are detected.

Body-parser - Parse incoming request bodies in a middleware before your handlers, available under the req.body property

Method-override - can overwrite, req-method, can add UPDATE, and DELETE requests to be handled.

# How do we do cookies in express ( BONUS )

In express we have built in function to set cookies,

res.cookie('username', req.body.email); // sets a cookie username, with value from req.body.email
The cookie will live on the client's browser until expiring, or until user clears its cookies. Remember even if the server turns off and on the cookie will still be on clients browser.

To check your cookies go into Chrome Dev tools --> Application --> Storage ---> Cookies ---> localhost or any other website.

You can edit and delete cookies there as well which makes this tool very powerful!!

How do we parse Cookies when a client request comes in ( BONUS )
We can write our own parser, that parses the headers, but that would be too much work. So there is a middleware from npm called cookie-parser

const cookieParser = require('cookie-parser');
///.... code


app.use(cookieParser());
//-- more code with routes

req.cookies // has all cookies 