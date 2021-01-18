const express = require('express');
const port = 3000;

// create an express app
const app = express();

// routing
app.get('/',(req,res)=>{
    console.log('Homepage Route called.');
    res.write('Homepage!');
    res.end();
});

// have the app listen on the port
app.listen(port,console.log(`Server is listening on port ${port}`));
