
const sqlite3 = require('sqlite3').verbose();



const connection = new sqlite3.Database('./database/DBM.db');

function getConnection() {
  return connection;
}

module.exports = {getConnection};