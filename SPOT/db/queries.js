const client = require("./connection");

const getAllObjectives = (cb) => {
  client
    .query(
      "SELECT id,type,question,answer,sort,day_id FROM objectives ORDER BY id;"
    )
    .then((response) => {
//      console.log("getAllObjectives query success:", response.rows);
      console.log("getAllObjectives query success");
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

const insertObjective = (newObj) => {
  return client
  .query(
    "INSERT INTO objectives (type,question,answer,sort,day_id) VALUES ($1,$2,$3,$4,$5);",
    [newObj.type,newObj.question,newObj.answer,newObj.sort,newObj.day_id]
  )
  .then((response) => {
    return true; // TODO can we return the new ID for this new row?
  })
  .catch((err) => {
    console.log("insertObjective query error:", err);
  });
}

module.exports = {
  getAllObjectives,
  getObjectiveById,
  insertObjective
};
