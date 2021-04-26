const client = require("./connection");

//
// Days
//
const getAllDays = (cb) => {
  client
    .query(
      `SELECT day_id, day_mnemonic, count(question)
      FROM days 
      LEFT JOIN objectives ON objectives.day_id = days.id
      GROUP BY objectives.day_id, days.day_mnemonic
      ORDER BY days.day_mnemonic;`
    )
    .then((response) => {
      cb(response.rows);
    })
    .catch((err) => {
      console.log("getAllDays query error:", err);
    });
};

const getDay = (day_id, cb) => {
  return client
    .query(
      `SELECT objectives.id,type,question,answer,sort,day_id, day_mnemonic 
      FROM objectives 
      LEFT JOIN days ON objectives.day_id = days.id 
      WHERE day_id = $1 
      ORDER BY sort;`,
      [day_id]
    )
    .then((response) => {
      return cb(response.rows);
    })
    .catch((err) => {
      console.log("getDay query error:", err);
    });
};

const getDayMnemonic = (day_id, cb) => {
  return client
    .query(
      `SELECT day_mnemonic 
      FROM days 
      WHERE id = $1`,
      [day_id]
    )
    .then((response) => {
      return cb(response.rows);
    })
    .catch((err) => {
      console.log("getDay query error:", err);
    });
};

//
// Objectives
//
const getAllObjectives = (cb) => {
  client
    .query(
      "SELECT id,type,question,answer,sort,day_id FROM objectives ORDER BY id;"
    )
    .then((response) => {
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

const updateObjective = (objUpdate) => {
  return client
  .query(
    "UPDATE objectives SET type = $1, question = $2, answer = $3, sort = $4, day_id = $5 WHERE id = $6;",
    [objUpdate.type,objUpdate.question,objUpdate.answer,objUpdate.sort,objUpdate.day_id,objUpdate.id]
  )
  .then((response) => {
    return true; // TODO can we return the new ID for this new row?
  })
  .catch((err) => {
    console.log("insertObjective query error:", err);
  });
}

// let newOrder = {id: req.body[nameOfArray][key], sort: key};
// dbFns.setObjectiveSortOrder(newOrder);

const setObjectiveSortOrder = (objUpdate) => {
  return client
  .query(
    "UPDATE objectives SET sort = $1 WHERE id = $2;",
    [objUpdate.sort,objUpdate.id]
  )
  .then((response) => {
    return true; // 
  })
  .catch((err) => {
    console.log("setObjectiveSortOrder query error:", err);
  });
}

const deleteObjective = (id) => {
  return client
    .query(
      "DELETE FROM objectives WHERE id = $1;",
      [id]
    )
    .then(() => {
      return;
    })
    .catch((err) => {
      console.log("deleteObjective query error:", err);
    });
};

module.exports = {
  getAllObjectives,
  getObjectiveById,
  insertObjective,
  updateObjective,
  setObjectiveSortOrder,
  deleteObjective,
  getAllDays,
  getDay,
  getDayMnemonic
};
