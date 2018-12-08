const orm = require('../config/orm.js');

const burger = {
  all: function(cb) {
    orm.all('burgers', (res) => {
      cb(res);
    });
  },

  create: (cols, vals, cb) => {
    orm.create("burgers", cols, vals, res => {
      cb(res);
    });
  },

  update: (cb) => {
    orm.update("burgers", res => {
      cb(res);
    });
  },

  delete: (cb) => {
    orm.delete("burgers", res => {
      cb(res);
    });
  }
};

// Export to controllers/burger_controller.js
module.exports = burger;
