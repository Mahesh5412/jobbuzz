const connection = require("../../bin/connection");

var companyDetails = (req, res) => {
  console.log(req.body.data.branch)
  connection.query(
    "SELECT count(*) as total FROM companyDetails WHERE userId = ?",
    [req.body.data.userId],
    function (error, results, fields) {
      if (results[0].total == 1) {
        connection.query(
          "UPDATE companyDetails SET company = ? ,contactEmail = ? ,contact = ?, industryType = ?, branch = ? WHERE userId= ?",
          [
            req.body.data.cname,
            req.body.data.cemail,
            req.body.data.cnumber,
            req.body.data.vertical,
            req.body.data.branch,
            req.body.data.userId

          ],
          function (err, result) {
            if (!err) {
              res.status(200).json([
                {
                  status: "success"
                }
              ]);
            }
          }
        );
      } else {
        connection.query(
          "INSERT INTO `companyDetails`(`userId`,`company`,`branch`,`address`,`contact`,`website`,`contactEmail`,`industryType`,`description`)VALUES('" +
          req.body.data.userId +
          "','" +
          req.body.data.cname +
          "','" + req.body.data.branch + "','','" +
          req.body.data.cnumber +
          "','','" +
          req.body.data.cemail +
          "','" +
          req.body.data.vertical +
          "','')",
          function (err, result) {
            if (!err) {
              res.status(200).json([
                {
                  status: "success",
                  insertID: result.insertId
                }
              ]);
            } else {
              res.status(502).json([
                {
                  status: "failed",
                  errMsg: "Error while inserting data."
                }
              ]);
            }
          }
        );
      }
    }
  );
};

const skillOptions = (req, res) => {
  /select data from a database/;
  connection.query("SELECT * FROM  skillTable", function (err, result, fields) {
    if (!err)
      res.json({
        status: "success", //success response
        data: result
      });
    else
      res.json([
        {
          status: "failed", //failure response
          errMsg: "Error while performing query."
        }
      ]);
  });
};
var dashboard = (req, res) => {
  console.log(req.body.data);
  connection.query(
    "SELECT companyId,count(*) as total FROM `companyDetails` where (`userId` = '" +
    req.body.userId +
    "')",
    function (err, result) {
      if (result[0].total == 1) {
        // console.log(result[0].companyId);
        connection.query(
          "SELECT * FROM `companyDetails` INNER JOIN `jobDetails` ON `jobDetails`.`companyId` = `companyDetails`.`companyId` AND `jobDetails`.`companyId` = '" +
          result[0].companyId +
          "'",
          function (err, result) {
            if (!err) {

              res.json({
                status: "success",
                data: result
              });
            }
            else
              res.json([
                {
                  status: "failed",
                  errMsg: "Error while performing query."
                }
              ]);
          }
        );
      }
      else {
        console.log("dashboard failure case")
        res.json([
          {
            status: "failed",
            errMsg: "Error CompanyId not Found Please update companydetails."
          }
        ]);

      }
    }
  );
};


var AppliedApplicants = (req, res) => {

  // var dataArray=[]
  console.log(req.body.userId + "___________");
  connection.query(
    "SELECT companyId,count(*) as total FROM `companyDetails` where (`userId` = '" +
    req.body.userId +
    "')",
    function (err, result1) {
      if (result1[0].total == 1) {
        console.log(result1)
        console.log(req.body.userId);
        connection.query("SELECT * FROM userJobApplication INNER JOIN jobDetails ON userJobApplication.jobId = jobDetails.jobId INNER JOIN userRegistration ON userRegistration.userId=userJobApplication.userId WHERE userJobApplication.companyId =? AND userJobApplication.jobStatus='applied'", [result1[0].companyId], function (err, result3) {
          if (result3) {
            res.json([{
              status: "success",
              data: result3
            }])
          }
          else
            res.json([
              {
                status: "failed",
                errMsg: "Error while performing query."
              }
            ]);
        })
      }
      else {
        console.log("AppliedApplicants failure case")
        res.json([
          {
            status: "failed",
            errMsg: "Error CompanyId not Found Please update companydetails."
          }
        ]);

      }

    });
}




// var noOfCount = (req, res) => {
//   console.log(req.body.data);
//   connection.query(
//     "SELECT companyId FROM `companyDetails` where (`userId` = '" +
//     req.body.userId +
//     "')",
//     function (err, result) {
//       if (!err) {
//         console.log(result[0].companyId);
//         connection.query(
//           "SELECT COUNT(*) FROM userJobApplication as a INNER JOIN companyDetails as b ON a.companyId = b.companyId where (`companyId` = '" +
//           result[0].companyId +
//           "')",
//           function (err, result) {
//             if (!err)
//               res.json({
//                 status: "success",
//                 data: result
//               });
//             else
//               res.json([
//                 {
//                   status: "failed",
//                   errMsg: "Error while performing query."
//                 }
//               ]);
//           }
//         );
//       }
//     }
//   );
// };

var employer = (req, res) => {
  console.log(req.body.data.userId);
  console.log(req.body.jobId);
  if (req.body.jobId) {
    connection.query(
      "select count(*) as total from `jobDetails` where (`jobId` = '" +
      req.body.jobId.key +
      "')",
      function (err, result) {

        if (result[0].total == 1) {

          connection.query(
            "UPDATE jobDetails SET jobProfile = ? ,description = ? ,experienceYearsReq = ?,specialSkills = ?,	vacancies = ? ,	annualSalaryLakhs = ? ,startDate = ? ,lastDate = ?  WHERE jobId=?",
            [
              req.body.data.jobprofile,
              req.body.data.description,
              req.body.data.experience,
              req.body.data.special,
              req.body.data.vacancies,
              req.body.data.salary,
              req.body.data.startdate,
              req.body.data.lastdate,
              req.body.jobId.key
            ],
            function (err, result) {
              if (!err) {
                connection.query(
                  "UPDATE userSkillLevel SET skillLevel = ? WHERE userId=? and skillId=?",
                  [
                    req.body.data.skills,
                    req.body.data.userId,
                    req.body.data.skillId
                  ],
                  function (err, result) {
                    if (!err) {
                      connection.query(
                        "UPDATE companyDetails SET branch = ? WHERE userId=?",
                        [req.body.data.location, req.body.data.userId],
                        function (err, result) {
                          if (!err) {
                            res.status(200).json({ status: "success" });
                          } else {
                            res.status(500).json({ status: "failure" }); //failure  response
                            throw err;
                          }
                        }
                      );
                    }
                  }
                );
              }
            }
          );
        } else {
          console.log("fail")
        }
      }
    );
  } else {

    console.log(req.body.data.userId)
    connection.query("select * from companyDetails where userId=?", req.body.data.userId, function (err, result11) {
      console.log(result11)
      if (result11) {

        connection.query(
          "INSERT INTO `jobDetails`(`jobProfile`,`description`,`experienceYearsReq`,`companyId`,`specialSkills`,`vacancies`,`annualSalaryLakhs`,`startDate`,`lastDate`)VALUES('" +
          req.body.data.jobprofile +
          "','" +
          req.body.data.description +
          "','" +
          req.body.data.experience +
          "','" +
          result11[0].companyId +
          "','" +
          req.body.data.special +
          "','" +
          req.body.data.vacancies +
          "','" +
          req.body.data.salary +
          "','" +
          req.body.data.startdate +
          "','" +
          req.body.data.lastdate +
          "')",
          function (err, result) {
            if (!err) {
              console.log(result);
              console.log(result.insertId);
              console.log(result.jobId + "___jobId")
              req.body.selectState.map((data, i) => {
                console.log(data);
                connection.query(
                  "INSERT INTO `jobRequiredSkills` (`jobId`, `skillId`) VALUES ('" +
                  result.insertId +
                  "','" +
                  data.value +
                  "')",
                  function (err, result) {
                    if (!err) {
                      if (req.body.selectState.length == i + 1) {
                        res.status(200).json({ status: "success" });
                      } // success response
                    } else {
                      res.status(500).json({ status: "failure" }); //failure  response
                      throw err;
                    }
                  }
                );
              });
            } else
              res.json([
                {
                  status: "failed",
                  errMsg: "Error while performing query."
                }
              ]);
          }
        );
      }

    })
  }
};

var applyDetails = (req, res) => {
  var data = [];
  req.body.dashboardData.map((val, i) => {
    connection.query(
      "SELECT userRegistration.userName,userRegistration.email,userRegistration.mobileNumber,userJobApplication.userId,userJobApplication.jobId,count(*) as total FROM userRegistration INNER JOIN userJobApplication ON userJobApplication.userId=userRegistration.userId WHERE userJobApplication.jobStatus != 'applied' and  userJobApplication.jobId= ?",
      val.jobId,
      function (err, result) {
        if (result) {
          data.push(result);
        }

        if (req.body.dashboardData.length === i + 1) {
          // console.log(data)
          res.json({
            status: "success",
            data: data
          });
        }
      }
    );
  });
};

var acceptDetails = (req, res) => {
  console.log(req.body.jobStatus);
  console.log(req.body.userData);
  console.log(req.body.jobData);
  connection.query(
    "UPDATE userJobApplication SET jobStatus =? WHERE userId=? AND jobId=?",
    [req.body.jobStatus, req.body.userData, req.body.jobData],
    function (err, result) {
      if (!err)
        res.json({
          status: "success",
          data: result
        });
      else
        res.json([
          {
            status: "failed",
            errMsg: "Error while performing query."
          }
        ]);
    }
  );
};

var noOfCount = (req, res) => {
  connection.query(
    "SELECT companyId FROM `companyDetails` where (`userId` = '" +
    req.body.userId +
    "')",
    function (err, result) {
      if (!err) {
        console.log("company Id coming");
        console.log("success");
        console.log(result[0].companyId);
        connection.query(
          "SELECT COUNT(*) as total FROM userJobApplication as a INNER JOIN companyDetails as b ON a.companyId = b.companyId where b.companyId=?",
          result[0].companyId,
          function (err, result) {
            if (!err) {
              console.log(result[0].total);
              res.json({
                status: "success",
                data: result
              });
            } else {
              res.json([
                {
                  status: "failed",
                  errMsg: "Error while performing query."
                }
              ]);
            }
          }
        );
      }
    }
  );
};

var getdata = (req, res) => {
  console.log(req.body.userId);
  connection.query(
    "SELECT * FROM companyDetails WHERE userId=?",
    req.body.userId,
    function (err, result, fields) {
      if (!err) {
        console.log(result);
        res.json({
          status: "success",
          data: result
        });
      } else {
        res.json([
          {
            status: "failed",
            errMsg: "Error while performing query."
          }
        ]);
      }
    }
  );
};

const skillsByJobId = (req, res) => {
  var jobId = req.body.jobId.key;
  console.log(jobId + "++jobId");
  connection.query(
    "SELECT companyDetails.branch,GROUP_CONCAT(skillTable.skill) as skill,jobRequiredSkills.skillId,jobDetails.* FROM `jobDetails` LEFT JOIN jobRequiredSkills ON jobDetails.jobId=jobRequiredSkills.jobId LEFT JOIN skillTable ON skillTable.skillId=jobRequiredSkills.skillId INNER JOIN companyDetails ON companyDetails.companyId=jobDetails.companyId and jobDetails.jobId = ?",
    jobId,
    function (err, result, fields) {
      if (!err)
        res.json({
          status: "success", //success response
          data: result
        });
      else
        res.json([
          {
            status: "failed", //failure response
            errMsg: "Error while performing query."
          }
        ]);
    }
  );
};

module.exports = {
  companyDetails,
  dashboard,
  employer,
  getdata,
  skillOptions,
  noOfCount,
  applyDetails,
  acceptDetails,
  skillsByJobId,
  AppliedApplicants
};
