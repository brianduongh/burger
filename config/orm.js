const connection = require('../config/connection.js');

const printQuestionMarks = (num) => {
  const arr = [];

  for (let i=0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

const orm = {
  all: (table, cb) => {
    let queryString = 'SELECT * FROM ' + table + ';';
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      };
      cb(result);
    });
  },

  create: (table, cols, vals, cb) => {
    let queryString = 'INSERT INTO burgers';

      queryString += ' (';
      queryString += cols.toString();
      queryString += ') ';
      queryString += 'VALUES (';
      queryString += printQuestionMarks(vals.length);
      queryString += '); ';

      console.log(queryString);
      console.log(vals);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  update: (table, cb) => {
    connection.query('UPDATE burgers SET devoured = true WHERE burger_name = "smashburger"', (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  delete: (table, cb) => {
    connection.query('DELETE FROM burgers WHERE burger_name = "testBurger"', (err, result) => {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }

}

// Export to models/burger.js
module.exports = orm;
