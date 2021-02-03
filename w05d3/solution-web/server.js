require('dotenv').config();

const express = require('express');
const router = require('./routes/router');

const app = express();
const port = process.env.PORT || 7865;

app.use('/objectives', router);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
