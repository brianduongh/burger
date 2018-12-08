// mySQL connection
const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  const connection = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
  });
};

connection.connect();

// Export connection to orm.js
module.exports = connection;
