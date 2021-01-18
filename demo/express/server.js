const express = require('express');
const port = 3000;

// create an express app
const app = express();

// use the ejs template engine
app.set('view engine','ejs');

// routing
app.get('/',(req,res)=>{
    console.log('Homepage Route called.');
    res.status(200).render('index'); // send views/index.ejs as the response
    res.end();
});

// have the app listen on the port
app.listen(port,console.log(`Server is listening on port ${port}`));
