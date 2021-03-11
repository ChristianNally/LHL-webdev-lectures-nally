const faker = require('faker');
// import the net library
const net = require('net');
const port = 8000;
// Create the connection to the server
const client = net.createConnection({
  port: port,
  // host: '127.0.0.1'
  host: 'localhost',
});

// set the encoding to utf-8
client.setEncoding('utf8');

// catch what we type on the keyboard using standard input
process.stdin.on('data', function(message) {

  client.write(message);

});

// Events: connect, message, error, end
client.on('connect', function () {
  console.log('client is connected to server');
  const clientName = faker.name.findName();
  client.write(`setName ${clientName}`);

});

// event handle for receiving incoming message from server
client.on('data', function (message) {
  console.log(message);
});

// event handler for error
client.on('error', function (err) {
  console.log(`Error: ${err.message}`);
});

// event handler for disconnection
client.on('end', function () {
  console.log('client disconnected from server');
});
