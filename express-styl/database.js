var mysql        = require('mysql');


//database mysql 
var connection = mysql.createConnection({
    host     : 'localhost:3306',
    user     : 'newuser',
    password : 'password'
});
  
connection.connect();
  
//Select all form database
connection.query('SELECT * FROM node', function(err, res, fields) {
    console.log('The solution is: ', res);
});


connection.query("CREATE DATABASE node", function (err, res) {
    console.log("Database created");
});

var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
connection.query(sql, function (err, res) {
    console.log("Table created");
});
  
  
connection.end();

module.exports = connection;
