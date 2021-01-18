//
// this code is based on the examples here:
// https://www.w3schools.com/nodejs/nodejs_http.asp
// and here: 
// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
//
// more terse but official documentation for the 'http' module is here:
// https://nodejs.org/api/http.html
// 

// here is a curl command to make a POST request of this server
// curl -X POST -H "Content-Type: application/json" -d '{"type":"chores", "description":"walk the dog"}' http://localhost:3000/todos

// define the constants used throughout this file
const http = require('http');
const fs = require('fs');
const path = require('path');
const db = require('./db/todos');
const todos = require('./db/todos');

const port = 3000;

// create the web server
// this function CAN be used by passing it a single parameter... a callback (called a requestListener) which has two parameters: request and response
const server = http.createServer((req, res) => {
  // req and res are objects that contain information about the request and response
  console.log('requestListener was called');
  console.log(`method: ${req.method}`);
  console.log(`path: ${req.url}`);

  // create route string
  const route = `${req.method} ${req.url}`;

  let filePath = '';

  // depending on the response, build an appropriate response
  switch (route) {
    case 'GET /':
      res.statusCode = 200; // 200 means OK

      // read index.html from the views directory
      filePath = path.join(__dirname,'views','index.html');
      console.log('retrieving view from:' + filePath);
      fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
          res.statusCode = 500; // 500 means fatal error
          res.write(err.message);
          res.end();
        } else {
          res.statusCode = 200; 
          res.write(fileContent);
          res.end();
        }
      });
    break;
    case 'GET /todos':
      res.statusCode = 200; // 200 means OK

      // transform JSON into text string
      const todoList = JSON.stringify(db);
      res.write(todoList);
      res.end();
    break;
    case 'POST /todos':
      let body = '';
      // extract the body of the request stream, which is broken into chunks
      // content is caught in chunks, and the end event is called when finished

      // receiving one chunk at a time
      req.on('data',chunk => {
        body += chunk;
      });

      // 'end' event is called when we know that the stream has ended.
      req.on('end',()=>{
        // create a new TODO object
        const newTodo = JSON.parse(body);

        // generate a random ID
        newTodo.id = Math.random().toString(36).substring(2,8);

        // add it to TODOs 'DB'
        db.push(newTodo);

        // send back a response
        res.statusCode = 201; // 201 means Created: see https://http.cat/201
        res.write('New TODO created.');
        res.end();
      });
    break;
    default:
      res.statusCode = 404; // 404 means Not Found

      // read index.html from the views directory
      filePath = path.join(__dirname,'views','404.html');
      console.log('retrieving view from:' + filePath);
      fs.readFile(filePath, 'utf8', (err, fileContent) => {
        if (err) {
          res.statusCode = 500; // 500 means fatal error
          res.write(err.message);
          res.end();
        } else {
          res.statusCode = 404; 
          res.write(fileContent);
          res.end();
        }
      });
    break;
  }
});

// have the web server listen for incoming requests
server.listen(port, () => console.log(`Server is listening on port ${port}`));
