const orm = require('../config/orm.js');

// Cols and vals are arrys, cb is call back function
const burger = {
  all: function(cb) {
    orm.all('burgers', (res) => {
      cb(res);
    });
  },

  create: (cols, vals, cb) => {
    orm.create('burgers', cols, vals, res => {
      cb(res);
    });
  },

  update: (condition, cb) => {
    orm.update('burgers', condition, res => {
      cb(res);
    });
  }
};

// Export to controllers/burger_controller.js
module.exports = burger;
