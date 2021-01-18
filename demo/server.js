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

  // depending on the response, build an appropriate response
  switch (route) {
    case 'GET /':
      res.statusCode = 200; // 200 means OK
      res.write("Homepage!"); // use the .write method to output text into the response.
      res.end(); // use .end to finish the response.
    break;
    case 'GET /todos':
      res.statusCode = 200; // 200 means OK
      res.write("ToDos!");
      res.end();
    break;
    default:
      res.statusCode = 404; // 404 means Not Found
      res.write("Cannot find this resource.");
      res.end();
    break;
  }
});

// have the web server listen for incoming requests
server.listen(port, () => console.log(`Server is listening on port ${port}`));
