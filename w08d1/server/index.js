// Server API
const PORT = 8080;
const app = require('express')();   // npm i express
const cors = require('cors');       // npm i cors
const uniqid = require('uniqid');   // npm i uniqid
const morgan = require('morgan');   // npm i morgan

app.use(morgan('dev'));
app.use(cors());


const data = [
    {id: uniqid(), task: 'buy milk', done: false},
    {id: uniqid(), task: 'wash dishes', done: false},
    {id: uniqid(), task: 'clean up', done: true },
];


app.get("/todos", (req, res) => {
    res.json(data);
})

app.post("/todos/:id/delete", (req, res) => {

})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
