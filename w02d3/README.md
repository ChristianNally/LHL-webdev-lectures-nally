# Lecture Notes

## W2D3 - Networking with TCP + HTTP

Welcome to Week 2 Day 3 !!! Today we will be 
talking about Networking and TCP ( with a touch 
of HTTP)

[x] TCP breaking a message into parts, each of which pushes
its way throughout the network by whatever route it can find.
[x] HTTP Parts of a URL: protocol, domain, port, path, query, anchor

## Networking

Think of the post office analogy, where intermediate stations forward
a message on from one place to another so long as its getting closer
to its final destination.

## Communcation Between Computers

TCP is similar, with the added wrinkle that a complete message is broken
down into packets. Each packet knows where it sits in the order, so that
it may be easily reassembled into the full message when it arrives at
the destination.

We spoke briefly about how packets can travel over a variety of media (radio,
fibre optics, wire etc.)

IP: We spoke about IP addresses and ports, and how some IP addresses are reserved
for inside your LAN, whereas most are permitted to be sent out on the open Internet.

## DEMO - Basic Chat Server

We built a chat server using tcp, at first using the 'net' package,
and then briefly showing how 'express' simplifies some aspects of this task.

Client (Basic)

const net = require('net');
const stdin = process.stdin;
//We need to specify the address and the port to connect to
const client = net.createConnection({
  host: 'localhost',
  port: 3000
});
//We need the encoding to tell the server and the client what kind of data are we transfering
client.setEncoding('utf8');
//When I, the client finally connect...........
client.on('connect', function() {
  client.write('I have connected!!!');
})

Server (Basic)

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

First code we started with was just how to 
connect the client and the server. Then we 
added a basic way to send a message once a 
client connects.

Then we added a way for the client to type 
using stdin and send that message to the server 
which it gets and broadcastsback to everyone 
else (see server.js and client.js)

HTTP - (Hyper Text Transfer Protocol, aka - rules (or protocol) on top of TCP)

We also talked at the very end of the lecture about HTTP. 
We talked about how the client requests some 
page from the server.

The client gives a TYPE of a request method

* GET - READ data from the server
* POST - SEND data and CREATE an object on the server
* PUT/PATCH - SEND data and UPDATE an object on the server
* DELETE - DELETE data on the server

The client also sends a route to the server on 
which method should event should run for that 
route

GET www.reddit.com/r/dogs - Hey reddit, please 
give me the page for the subreddit dogs

GET 
https://www.amazon.ca/gp/product/B00STSZ77G/ - 
Hey amazon give me the desciption for product 
number B00STSZ77G

Once the server receives and process the 
request, it send back a response which contains 
the following:

Response Status

Contains a response code and a message Response 
codes are divided in series:
 
* 100 series = informational
* 200 series = ok
* 300 series = redirection
* 400 series = client error
* 401 unauthorized
* 403 forbidden
* 404 not found
* 500 series = server error

Response headers - which information that is 
being returned.

and finally the...

Response Body - the content that the client 
requested. (usually HTML or JSON)


#
                                                    example.com
----------------                                 -------------------
client (Browser)                                 server (Web Server)
laptop on my desktop                             linux server, running Node listen to a port
                                                 9898
127.0.0.1                                        123.23.34.54

http://example.com:9898 
