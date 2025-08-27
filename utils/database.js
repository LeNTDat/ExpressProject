const Sequelize = require("sequelize");
const sequelize = new Sequelize('node-learning','root', 'Dat19101997',{
    dialect :'mysql',
    host: 'localhost'
});

module.exports = sequelize;




















// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-learning',
//     password:'Dat19101997'
// });

// module.exports = pool.promise()


