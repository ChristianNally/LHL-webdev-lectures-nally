const client = require("./connection");

//
// Users
//
const getUserByEmail = (email,cb) => {
  client
  .query('SELECT * FROM users WHERE email = $1;',[email])
  .then((response) => {
    cb(response.rows);
  })
  .catch((err)=>{
    console.log("getUserByEmail query error:", err);
  });
}

const insertUser = (newObj) => {
  return client
  .query(
    "INSERT INTO users (email,password) VALUES ($1,$2) RETURNING id;",
    [newObj.email,newObj.hashedPassword]
  )
  .then((response) => {
    console.log("response.rows[0]",response.rows[0]);
    return true; // TODO can we return the new ID for this new row?
  })
  .catch((err) => {
    console.log("insertUser query error:", err);
  });
}

//
// Understanding
//

const newUnderstanding = {
  user_id: user_id,
  objective_id: objective_id,
  understanding_id: understanding_id
};
dbFns.insertUnderstanding(newUnderstanding);

const insertUnderstanding = (newObj) => {
  return client
  .query(
    "INSERT INTO understandings (user_id, obj_id, day_id) VALUES ($1,$2,$3);",
    [newObj.user_id, newObj.obj_id, newObj.day_id]
  )
  .then((response) => {
    return true; // TODO can we return the new ID for this new row?
  })
  .catch((err) => {
    console.log("insertObjective query error:", err);
  });
};


const insertObjective = (newObj) => {

}

//
// Days
//
const getAllDays = (cb) => {
  client
    .query(
      `SELECT days.title, days.id, day_mnemonic, count(question)
      FROM days 
      LEFT JOIN objectives ON objectives.day_id = days.id
      GROUP BY days.id, days.day_mnemonic
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

const getDayDetails = (day_id, cb) => {
  return client
    .query(
      `SELECT id, day_mnemonic, title 
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

const updateDay = (dayUpdate) => {
  const query = "UPDATE days SET day_mnemonic = $2, title = $3 WHERE id = $1;";
  const valuesArray = [dayUpdate.id,dayUpdate.day_mnemonic,dayUpdate.title];
  console.log('query debug:',query + '::' + valuesArray);
  return client
  .query(query,valuesArray)
  .then((response) => {
    console.log("response",response);
    return true; // TODO can we return the new ID for this new row?
  })
  .catch((err) => {
    console.log("insertObjective query error:", err);
  });
}

//
// Objectives
//
const getAllObjectives = (cb) => {
  client
    .query(
      `SELECT objectives.id,type,question,answer,sort,day_id, days.day_description
      FROM objectives 
      INNER JOIN days ON days.id = day_id
      ORDER BY day_id,sort;`
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
  getUserByEmail,
  insertUser,
  getAllObjectives,
  getObjectiveById,
  insertObjective,
  updateObjective,
  setObjectiveSortOrder,
  deleteObjective,
  getAllDays,
  getDay,
  getDayDetails,
  updateDay
};