const burger = require('../models/burger.js');
const express = require('express');
const router = express.Router();

// Home route with logic for routes
router.get('/', function(req, res) {
  console.log('1st');
  burger.all(function(data) {
    let hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

// For burger post
router.post('/api/burgers', (req, res) => {
  burger.create(['burger_name'], [req.body.name], result => {
    console.log('success');
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = 'id = ' + req.params.id;
  burger.update(condition, result => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    console.log("updating");
  });
});

// Delete burger
router.delete('/api/burgers/:id', (req, res) => {
  const condition = 'id = ' + req.params.id;
  burger.delete(condition, result => {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
    console.log("DELETING");
  })
});

// Export to server.js
module.exports = router;
