const express = require('express');
const port = 3211;

// create an express app
const app = express();

// use the ejs template engine
app.set('view engine','ejs');

// a place from which we can serve static files
app.use(express.static('public'));

// routes are sequential. if the app finds one that matches, it will use that one.
app.get('/',(req,res)=>{
  res.status(200).render('index'); // send views/index.ejs as the response
});

app.get('*',(req,res)=>{
  console.log('404 route called.');
  res.status(404).render('404');
  res.end();
});

// have the app listen on the port
app.listen(port,console.log(`Server is listening on port ${port}`));
