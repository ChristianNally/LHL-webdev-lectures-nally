const client = require("./connection");

const getAllObjectives = (cb) => {
  client
    .query(
      "SELECT id,type,question,answer,sort,day_id FROM objectives ORDER BY id;"
    )
    .then((response) => {
      console.log("getAllObjectives query success:", response.rows);
      cb(response.rows);
    })
    .catch((err) => {
      console.log("getAllObjectives query error:", err);
    });
};

const getObjectiveById = (id) => {
  return client
    .query(
      "SELECT id,type,question,answer,sort,day_id FROM objectives WHERE id = $1;",
      [id]
    )
    .then((response) => {
      return response.rows[0];
    })
    .catch((err) => {
      console.log("getObjectiveById query error:", err);
    });
};

module.exports = {
  getAllObjectives,
  getObjectiveById,
};
