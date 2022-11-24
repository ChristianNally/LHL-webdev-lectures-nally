const net = require('net');
const port = 8008;

const server = net.createServer();

// we need an array to store the connected clients.
const connectedClients = [];

const broadcast = function(currentClient,message){
    for (let connectedClient of connectedClients){
        console.log('testing client named:',connectedClient.name);
        if(connectedClient !== currentClient){
            connectedClient.write(`${currentClient.name} says: ${message}`);
        }
    }
};

server.on('connection', function(client){
    console.log('Client is connected');

    // add the current client to the list of connected clients
    connectedClients.push(client);

    // set the encoding to utf8
    client.setEncoding('utf8');

    client.write("Welcome to my awesome server! ⛵");

    client.on('data', function(message){
        console.log(`Message received [${client.name}]: ${message}`);
        if (message.startsWith('setName ')){
            const clientName = message.replace(/setName /, '');
            console.log('setting client name to:',clientName);
            client.name = clientName;
        }
        broadcast(client,message);
    });

});

// have the server listen to a particular port for incoming connections
server.listen(port, function(){
    console.log(`Server is listening on port ${port}`);
});
