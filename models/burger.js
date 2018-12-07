const orm = require('../config/orm.js');

const burger = function() {
  console.log("burger");
}

// Export to controllers/burger_controller.js
module.exports = burger;
