const mysql = require('mysql');
// const config = require('local');

var pool = mysql.createPool({
    "user": "root",
    "password": "",
    "database": "ecommerce",
    "host": "localhost",
    "port": 3307
})


// var pool = mysql.createPool({
//     "user": process.env.MYSQL_USER,
//     "password": process.env.MYSQL_PASSWORD,
//     "database": process.env.MYSQL_DATABASE,
//     "host": process.env.MYSQL_HOST,
//     "port": process.env.MYSQL_PORT
  
// });

// var pool = mysql.createPool({
//     "user": config.user,
//     "password": config.password,
//     "database": config.database,
//     "host": config.host,
//     "port": config.port
  
// });

exports.pool = pool;