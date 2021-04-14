const net = require('net');
const port = 8008;

const client = net.createConnection({
    port: port, 
    host: 'localhost'
});

// set the encoding to utf-8
client.setEncoding('utf8');

process.stdin.on('data', function(message){
    client.write(message);
});

client.on('connect',function(){
    console.log("client is connected to server.");
});

client.on('data',function(message){
    console.log('server sent:',message);
});

client.on('end', function(){
    console.log('client disconnected from server');
});
