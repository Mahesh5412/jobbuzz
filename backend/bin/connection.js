/*
 * Purpose : This page is for Connect to Mysql Backend
 * Devlopers : Sethu, Neha, Saiteja
 */

const mysql = require("mysql");

const connection = mysql.createConnection({
  //localhost
  host: "192.168.0.150",
  user: "jobbuzz",
  password: "Novi@123",
  database: "jobbuzz"
  // host: "localhost",
  // user: "root",
  // password: "root",
  // database: "jobbuzz"
});

connection.connect(function(err, res) {
  if (err) throw err;
  console.log("connection established");
});

module.exports = connection;
