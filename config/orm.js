const connection = require('../config/connection.js');

// Helper function for SQL syntax
// Prints question marks for value
const printQuestionMarks = (num) => {
  const arr = [];

  for (let i=0; i < num; i++) {
    arr.push('?');
  }

  return arr.toString();
}

// Object for SQL statements
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
