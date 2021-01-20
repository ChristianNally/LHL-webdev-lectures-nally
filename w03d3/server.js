const express = require('express');
const PORT = 8080;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');

const users = [
    {username: 'nally', password: 'qwerty'},
];

// middleware
app.use(bodyParser.urlencoded());
app.user(cookieParser());

// routes

app.get('/',(req,res) => {
    res.render('homepage');
});

app.listen(PORT,'localhost',() => {console.log(`Server is listening on ${PORT}`);});
