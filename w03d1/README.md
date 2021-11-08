
# What is Node JS
[] it is Javascript extracted out of the browser context, and put into the 'back-end' context
[] the docs show the built-in packages

# What is a Web Server
[] a server is a program that speaks a protocol (client first message, server responds, etc.)
[] a server needs a port

# 3-Tier Architecture (Client, Server, Database)

# HTTP 
Request = Verb + Path + Payload (name = value pairs)

# Verbs
## GET (Read)
## POST (Create)
## PUT (Update)
## DELETE (Delete)

Response = Status Code + Body (HTML Document)

# Web Server based on http package and NodeJS
[] Build the basic Web Server with the HTTP package


#
# Web Server using Express 
#

[] Routing system
[] Less code, abstract the details away
[] Template system (ejs), to create dynamic pages
[] Middleware functions to make our life easier (bodyParser)



Commit Stages of Code Development
( list produced via git log --abbrev-commit --reverse --pretty=oneline )

25b2ba4 first version, with initial comment outline
3b50bd1 added initial requestListener
7bf7849 added the response for the homepage
8de2081 refactored to a switch statement and added a catch-all default
b685367 refactored homepage into a view
d94dff9 added 404 view
9f17453 add simulated TODOs database in JSON form
f12da9f added POST request to Create TODO object.
1502a5c move files to make room for the new express version
5be0c9f added express homepage route
a40c46e added ejs template engine
8a6c88e added POST route to add new TODOs
b494e28 (HEAD -> main) added DB file
