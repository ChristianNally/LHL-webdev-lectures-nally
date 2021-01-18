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
const port = 3000;

// create the web server
// this function CAN be used by passing it a single parameter... a callback (called a requestListener) which has two parameters: request and response
const server = http.createServer((req, res) => {
    // req and res are objects that contain information about the request and response
    console.log('requestListener was called');
    console.log(`method: ${req.method}`);
    console.log(`path: ${req.url}`);

    // depending on the response, build an appropriate response
    if (req.method === 'GET' && req.url === '/'){
        res.statusCode = 200; // 200 means OK
        res.write("Homepage!"); // use the .write method to output text into the response.
        res.end(); // use .end to finish the response.
    }
});

// have the web server listen for incoming requests
server.listen(port, () => console.log(`Server is listening on port ${port}`));
