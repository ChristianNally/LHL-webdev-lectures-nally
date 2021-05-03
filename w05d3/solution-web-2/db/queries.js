require("dotenv").config();
const pg = require("pg");

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};

const client = new pg.Client(config);

client
  .connect()
  .then(console.log("DB connected."))
  .catch((err) => {
    console.log("db connection error:", err);
  });

const getAllObjectives = (cb) => {
  client
    .query(`SELECT * FROM objectives ORDER BY id;`)
    .then((response) => {
      cb(response.rows);
    })
    .catch((err) => {
      console.log("db getAllObjectives error:", err);
    });
};

const getObjectiveById = (cb) => {};

module.exports = {
  getAllObjectives,
  getObjectiveById,
};
