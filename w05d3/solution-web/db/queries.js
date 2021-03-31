const client = require('./connection');

const getAllObjectives = (cb) => {
  client.query('SELECT id,type,question,answer,sort,day_id FROM objectives ORDER BY id;')
    .then((response) => {
      // console.log(response.rows);
      cb(response.rows);
    });
};

const getObjectiveById = (id) => {
  return client.query('SELECT id,type,question,answer,sort,day_id FROM objectives WHERE id = $1;', [id])
    .then((response) => {
      return response.rows[0];
    })
};

module.exports = {
  getAllObjectives,
  getObjectiveById
};

// client <==> web server <==> rdbms
