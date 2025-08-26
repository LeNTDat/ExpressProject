const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'node-learning',
    password:'Dat19101997'
});

module.exports = pool.promise()