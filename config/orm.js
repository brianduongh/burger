const connection = require('../config/connection.js');

const orm = {
  all: function() {
    console.log("hello");
  }
}

// Export to models/burger.js
module.exports = orm;
