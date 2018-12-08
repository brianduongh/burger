const burger = require('../models/burger.js');
const express = require('express');
const router = express.Router();

// Home route with logic for routes
router.get('/', function(req, res) {
  console.log("1st");
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
    console.log("success");
    res.json({ id: result.insertId });
  });
});

// Export to server.js
module.exports = router;
