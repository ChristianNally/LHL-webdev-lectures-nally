const pg = require('pg');

const Client = pg.Client;

const configObj = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT
};

console.log('db connection info:',configObj);

const client = new Client(configObj);

client.connect()
.then(() => console.log('db connected'))
.catch(err => console.error('db connection error', err.stack));

module.exports = client;
