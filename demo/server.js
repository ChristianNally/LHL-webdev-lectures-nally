//
// this code is based on the examples here:
// https://www.w3schools.com/nodejs/nodejs_http.asp
// and here: 
// https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module
//
// more terse but official documentation for the 'http' module is here:
// https://nodejs.org/api/http.html
// 

// define the constants used throughout this file
const http = require('http');

// create the web server
// this function CAN be used by passing it a single parameter... a callback (called a requestListener) which has two parameters: request and response
const server = http.createServer();

// have the web server listen for incoming requests
server.listen(3000, () => console.log(`Server is listening.`));
