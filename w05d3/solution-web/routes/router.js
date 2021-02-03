const express = require('express');
const router = express.Router();
const dbFns = require('../db/queries');

// GET /objectives/
router.get('/', (req, res) => {
  dbFns.getAllObjectives((item) => {
    res.json(item);
  });
});

// GET /objectives/:id
router.get('/:id', (req, res) => {
  dbFns.getObjectiveById(req.params.id)
    .then((item) => {
      res.json(item);
    });
});

module.exports = router;
