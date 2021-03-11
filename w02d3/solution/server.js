// import the net library -> TCP protocal
const net = require('net');
// define the port on which the server will listen
const port = 8000;

// create the net server
//Create an instance of the server
const server = net.createServer();

// An array to keep tracks of all the connected clients

const connectedClients = [];

// broadcast the message to all connected clients

const broadcast = function (currentClient, message) {
  for (let connectedClient of connectedClients) {
    // don t send it back the the issuing client
    if (connectedClient !== currentClient) {
      connectedClient.write(`${connectedClient.name} says: ${message}`);
    }
  }
};

// Wait for a few events: connection, message, errror, disconnect

// Event: when a client connect => on connection
server.on('connection', function (client) {
  // client variable is an object containing all the properties of the client connection
  console.log('Client is connected.');

  // add the current client to the list of connected clients
  connectedClients.push(client);

  // set the encoding to utf8

  client.setEncoding('utf8');

  // sending back a welcome message

  client.write('Welcome to my awesome server!');

  // event handlder to catch any incoming client message

  client.on('data', function (message) {
    console.log(`Message received from client: ${message}`);

    // are we getting a setName instruction?

    if (message.match(/setName/)) {
      const clientName = message.replace(/setName /, '');

      client.name = clientName;

    }


    // send back the message to all connected clients > broadcast
    broadcast(client, message);
  });

  // error event handler
  client.on('error', function (err) {
    console.log(`Error: ${err.message}`);
  });

  // on close event handler -> whenever a client disconnect

  client.on('close', function () {
    console.log('client is disconected.');
  });
});

// have the server listen for incoming client connection
server.listen(port, function () {
  console.log(`Server is listening on port ${port}`);
});
