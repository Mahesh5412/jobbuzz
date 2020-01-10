const connection = require("../../bin/connection");

const dashboard = (req, res) => {
  connection.query(
    "SELECT userJobApplication.applicationId,jobDetails.jobProfile,companyDetails.company FROM userJobApplication INNER JOIN jobDetails ON jobDetails.jobId=userJobApplication.jobId INNER JOIN companyDetails ON companyDetails.companyId=userJobApplication.companyId WHERE userJobApplication.userId=?",
    req.body.userId,
    function (err, result, fields) {
      if (!err) {
        res.json({
          status: "success", //success  response
          data: result
        });
      } else
        res.json([
          {
            status: "failed", //failure response
            errMsg: "Error while performing query."
          }
        ]);
    }
  );
};
const getdata = (req, res) => {
  /*select data from a database*/
  console.log(req.body.userId);

  connection.query('SELECT *,count(*) as total FROM userDetails as a INNER JOIN userRegistration as b on a.userId = b.userId INNER JOIN interestedSectors as c on c.userId = b.userId INNER JOIN interestedLocations as d on d.userId=c.userId WHERE a.userId=?', req.body.userId, function (err, result) {
    if (result[0].total == 1) {
      res.json({
        status: "success", //success response
        data: result
      });
    }
    else {
      connection.query(
        "SELECT * FROM  userRegistration  WHERE mobileNumber=?",
        req.body.isToken,
        function (err, result, fields) {
          if (!err) {
            res.json({
              status: "success", //success response
              data: result
            });
          }
        })
    }
  }
  );
};

const skillOptions = (req, res) => {
  console.log(req.body.userId);
  /*select data from a database*/
  connection.query("SELECT skillTable.* FROM skillTable WHERE skillTable.skillId NOT IN(SELECT skillId FROM userSkillLevel WHERE userId=?)", [req.body.userId], function (err, result, fields) {
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

const jobApply = (req, res) => {
  console.log("jobapply");
  console.log(req.body.userId);
  console.log(req.body.jobId);
  if (req.body.joId !== "") {
    connection.query("SELECT companyId,count(*) as total FROM `jobDetails` where jobId= ?", req.body.jobId,
      function (err, result) {
        if (result) {

          connection.query("select count(*) as total from userJobApplication where jobId=?", req.body.jobId, function (err, result1) {
            if (result1[0].total == 1) {
              console.log(result[0].companyId + "update>>>>>");
              connection.query(
                "UPDATE userJobApplication SET userId=?,jobId=?,jobStatus=?,companyId=? where jobId=?", [req.body.userId, req.body.jobId, req.body.jobStatus, req.body.companyId, req.body.jobyId],
                function (err, result) {
                  if (!err) {
                    res.status(200).json({ status: "success" }); //success response
                  } else {
                    res.status(500).json({ status: "failure" }); //failure response
                    throw err;
                  }
                }
              )
            }

            else {
              console.log(result[0].companyId + "insert>>>>>>");
              connection.query(
                "INSERT INTO `userJobApplication`(`userId`,`jobId`,`jobStatus`,`companyId`) VALUES ('" +
                req.body.userId +
                "','" +
                req.body.jobId +
                "','" +
                req.body.jobStatus +
                "','" +
                result[0].companyId +
                "')",
                function (err, result) {
                  if (!err) {
                    res.status(200).json({ status: "success" }); //success response
                  } else {
                    res.status(500).json({ status: "failure" }); //failure response
                    throw err;
                  }
                }

              );

            }
          }
          );
        };
      })
  } else {
    connection.query("select * from companyDetails where userId=?", req.body.userId, function (err, result) {
      if (!err) {
        console.log(result[0].companyId);
        connection.query(
          "INSERT INTO `userJobApplication`(`userId`,`jobId`,`jobStatus`,`companyId`) VALUES ('" +
          req.body.userId +
          "','" +
          req.body.jobId +
          "','" +
          req.body.jobStatus +
          "','" +
          result[0].companyId +
          "')",
          function (err, result) {
            if (!err) {
              res.status(200).json({ status: "success" }); //success response
            } else {
              res.status(500).json({ status: "failure" }); //failure response
              throw err;
            }
          }

        );

      }
    })
  }
}
const jobDetails = (req, res) => {
  //selects records that have matching values in both tables
  connection.query(
    "SELECT * FROM jobDetails INNER JOIN companyDetails ON jobDetails.companyId=companyDetails.companyId",
    function (err, result, fields) {
      if (!err)
        res.json({
          status: "success", //success response
          data: result
        });
      else
        res.json([
          {
            status: "failed", //failure  response
            errMsg: "Error while performing query."
          }
        ]);
    }
  );
};


const topsix = (req, res) => {
  //selects records that have matching values in both tables
  connection.query(
    "SELECT * FROM jobDetails INNER JOIN companyDetails ON jobDetails.companyId=companyDetails.companyId LIMIT 6",
    function (err, result, fields) {
      if (!err)
        res.json({
          status: "success", //success response
          data: result
        });
      else
        res.json([
          {
            status: "failed", //failure  response
            errMsg: "Error while performing query."
          }
        ]);
    }
  );
};
const skills = (req, res) => {
  console.log(req.body.selectOption.length);

  req.body.selectOption.map((data, i) => {
    connection.query(
      "INSERT INTO `userSkillLevel`(`userId`, `skillId`, `skillLevel`) VALUES ('" +
      req.body.userId +
      "','" +
      data.value +
      "','" +
      data.stage +
      "')",
      function (err, result) {
        if (!err) {
          if (req.body.selectOption.length == i + 1) {
            res.status(200).json({ status: "success" });
          } // success response
        } else {
          res.status(500).json({ status: "failure" }); //failure  response
          throw err;
        }
      }
    );
  });
};
const userDetails = (req, res) => {
  var data = [req.body.data];
  console.log(req.body.data.name); //req for  user name in console
  console.log(req.body.data);

  /*  COUNT (*) function returns the number of rows in userDetails */

  connection.query(
    "SELECT count(*) as total FROM userDetails WHERE userId = ?",
    [req.body.data.userId],
    function (error, results, fields) {
      if (results[0].total == 1) {
        /*  UPDATE the  Details of userRegistration , userDetails,skillTable   */
        connection.query(
          "UPDATE userRegistration SET userName = ?, email =? WHERE userId=?",
          [req.body.data.name, req.body.data.email, req.body.data.userId],
          function (err, result) {
            if (!err) {
              connection.query(
                "UPDATE userDetails SET graduation =?, gradDate =?,visaType =? WHERE userId=?",
                [
                  req.body.data.degree,
                  req.body.data.completion_date,
                  req.body.data.visa_type,
                  req.body.data.userId
                ],
                function (err, result) {
                  if (!err) {
                    connection.query(
                      "UPDATE interestedSectors SET sector =? WHERE userId=?",
                      [req.body.data.interest, req.body.data.userId],
                      function (err, result) {
                        if (!err) {
                          connection.query(
                            "UPDATE interestedLocations SET location =? WHERE userId=?",
                            [req.body.data.location, req.body.data.userId],
                            function (err, result) {
                              if (!err) {
                                res.status(200).json([
                                  {
                                    status: "success" // success response
                                  }
                                ]);
                              }
                            }
                          );
                        }
                      }
                    );
                  } else {
                    res.status(502).json([
                      {
                        status: "failed", // failure response
                        errMsg: "Error while inserting data."
                      }
                    ]);
                  }
                }
              );
            }
          }
        );
      } else {
        /* insert new records in  userDetails table*/
        connection.query(
          "INSERT INTO `userDetails`(`userId`,`graduation`,`gradDate`,`college`,`university`,`visaType`) VALUES ('" +
          req.body.data.userId +
          "','" +
          req.body.data.degree +
          "','" +
          req.body.data.completion_date +
          "','','','" +
          req.body.data.visa_type +
          "')",
          function (err, result) {
            if (!err) {
              /* insert new records in skilltable table*/
              connection.query(
                "INSERT INTO `interestedSectors`(`userId`,`sector`) VALUES ('" +
                req.body.data.userId +
                "','" +
                req.body.data.interest +
                "')",
                function (err, result) {
                  if (!err) {
                    connection.query(
                      "INSERT INTO `interestedLocations`(`userId`,`locationType`,`location`) VALUES ('" +
                      req.body.data.userId +
                      "','','" +
                      req.body.data.location +
                      "')",
                      function (err, result3) {
                        if (result3) {
                          res.status(200).json([
                            {
                              status: "success", // success response
                              insertID: result3.insertId
                            }
                          ]);
                        } else {
                          res.status(502).json([
                            {
                              status: "failed", //  failure response
                              errMsg: "Error while inserting data."
                            }
                          ]);
                        }
                      }
                    );
                  }
                }
              );
            }
          }
        );
      }
    }
  );
};

const applicationSkills = (req, res) => {
  var dataArray = [];
  // connection.query("select * from companyDetails where userId=?",req.body.userId,function(err,result){
  //   if(result){
  //     console.log(result[0].companyId)

  //   }
  // })
  console.log(req.body.userId)

  connection.query(
    "SELECT * FROM userJobApplication INNER JOIN jobDetails ON jobDetails.jobId=userJobApplication.jobId INNER JOIN companyDetails ON companyDetails.companyId=userJobApplication.companyId WHERE userJobApplication.userId=?",
    req.body.userId, function (err, resultData) {
      console.table(resultData);
      console.log(resultData)
      if (!err) {
        var length = resultData.length;
        resultData.map((jobData, i) => {
          connection.query(
            "SELECT a.skill,b.jobId FROM `skillTable` AS a INNER JOIN `jobRequiredSkills` AS b ON a.skillId = b.skillId WHERE b.jobId=?",
            jobData.jobId,
            function (err, result) {
              //  console.table(result)
              if (!err) {
                let x = result.map(x => {
                  return x.skill;
                });
                console.log(x);
                // result.map((skillData,i)=>{
                //   if(skillData.jobId == jobData.jobId){

                dataArray.push({
                  jobData: jobData,
                  // jobid: jobData.jobId,
                  skills: x
                });

                // }

                // })
              }
              if (length === i + 1) {
                // console.log(dataArray)
                res.json({
                  status: "success", //success response
                  data: dataArray
                });
              }
            }
          );
        });
      } else {
        res.status(502).json([
          {
            status: "failed", //  failure response
            errMsg: "Error while inserting data."
          }
        ]);
      }
    }
  );
};

const getSkills = (req, res) => {
  //selects records that have matching values in both tables
  console.log(req.body)
  connection.query(
    "SELECT * FROM `userSkillLevel` INNER JOIN skillTable ON skillTable.skillId=userSkillLevel.skillId WHERE userSkillLevel.userId=?",
    req.body.id,
    function (err, result, fields) {
      if (!err)
        res.json({
          status: "success", //success response
          data: result
        });
      else
        res.json([
          {
            status: "failed", //failure  response
            errMsg: "Error while performing query."
          }
        ]);
    }
  );
};

const deleteSkill = (req, res) => {
  console.log(req.body.data)
  connection.query("DELETE FROM userSkillLevel where skillId = ? ", req.body.data, function (err, result) {
    if (!err)
      res.status(200).json([{
        status: 'success',
      }])
    else
      res.status(502).json([{
        status: 'failed',
        errMsg: 'Error while deleting data.'
      }])
  })
};
module.exports = {
  dashboard,
  getdata,
  jobApply,
  jobDetails,
  skills,
  userDetails,
  skillOptions,
  applicationSkills,
  getSkills,
  deleteSkill,
  topsix
};
