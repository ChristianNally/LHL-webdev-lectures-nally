const net = require('net');
const stdin = process.stdin;

const server = net.createServer();
// when someone connects................
server.on('connection', function(conn) {
  //Set encoding just like on the client
  conn.setEncoding('utf8');
  //when one of the connections sends data and we recieve it.............
  conn.on('data', function(data) {
    console.log("connected user says:", data);
  })
  console.log("someone has connected");
})

server.listen(3000)
