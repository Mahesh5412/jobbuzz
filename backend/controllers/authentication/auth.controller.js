/*
 * Purpose : Authentication controller file
 * Devlopers : Sethu, neha,Saiteja
 */

const connection = require("../../bin/connection");
const md5 = require("md5");


const userRegister = (req, res) => {
  /*  COUNT (*) function returns the number of rows in userRegistration */
  var userPwd = md5(req.body.password);
  connection.query(
    "SELECT count(*) as total FROM `userRegistration` WHERE `email` = '" +
    req.body.email +
    "' or `mobileNumber` = '" +
    req.body.mobile +
    "'",
    function (err, result) {
      if (result[0].total == 0) {
        /* insert new records in userRegistration table*/
        connection.query(
          "INSERT INTO `userRegistration`(`userName`, `email`, `mobileNumber`, `password`,`role`) VALUES ('" +
          req.body.name +
          "','" +
          req.body.email +
          "','" +
          req.body.mobile +
          "','" +
          userPwd +
          "','" +
          req.body.type +
          "')",
          function (err, result) {
            if (err) {
              throw err;
            } else {
              res.json({ result: "success" }); //success response
            }
          }
        );
      } else {
        res.json({ result: "failure" }); //failure response
      }
    }
  );
};




const userLogin = (req, res) => {
  console.log(req.body);
  var userPwd = md5(req.body.password);
  var userMobile = req.body.mobile;

  /*  COUNT (*) function returns the number of rows in userDetails */

  connection.query(
    "SELECT count(*) as total FROM `userRegistration` WHERE (`email` = '" +
    req.body.name +
    "' or `mobileNumber` = '" +
    req.body.name +
    "' ) and `password` = '" +
    userPwd +
    "'",
    function (err, result) {
      if (result[0].total == 1) {
        /*  select data from database 'userRegistration' */

        connection.query(
          "SELECT * FROM `userRegistration` WHERE (`email` = '" +
          req.body.name +
          "' or `mobileNumber` = '" +
          req.body.name +
          "' ) and `password` = '" +
          userPwd +
          "'",
          function (userErr, userResult) {
            if (userErr) {
              throw userErr;
            }

            res.json({
              result: "success", //success  response
              data: userResult[0]
            });
            // console.log(userResult);
          }
        );
      } else {
        res.json({ result: "failure" }); //failure response
      }
    }
  );
};

module.exports = { userRegister, userLogin }
