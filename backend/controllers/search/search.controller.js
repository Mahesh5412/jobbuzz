const connection = require("../../bin/connection");

const getDetails = (req, res) => {
    console.log(req.body.form)
    if(req.body.searchData != "" && req.body.location == ""){
    connection.query("SELECT * FROM `jobDetails` INNER JOIN `companyDetails` ON `jobDetails`.`companyId` = `companyDetails`.`companyId` AND jobDetails.jobProfile LIKE '%"+ req.body.searchData +"%'", function (err, result, fields) {
        console.log(result)
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
    }
    else if (req.body.location != "" && req.body.searchData == "") {
        connection.query("SELECT * FROM `jobDetails` INNER JOIN `companyDetails` ON `jobDetails`.`companyId` = `companyDetails`.`companyId` AND `companyDetails`.`branch` LIKE '%" + req.body.location + "%'", function (err, result, fields) {
            console.log(result)
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
    }
    else if (req.body.searchData == "" && req.body.location == "") {
        connection.query("SELECT * FROM `jobDetails` INNER JOIN `companyDetails` ON `jobDetails`.`companyId` = `companyDetails`.`companyId`", function (err, result, fields) {
            console.log(result)
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
    }
    else if(req.body.searchData != "" && req.body.location != "") {
        connection.query("SELECT * FROM `jobDetails` INNER JOIN `companyDetails` ON `jobDetails`.`companyId` = `companyDetails`.`companyId` AND `companyDetails`.`branch` LIKE '%" + req.body.location + "%' AND `jobDetails`.`jobProfile` LIKE '%" + req.body.searchData + "%'", function (err, result, fields) {
            console.log(result)
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
    }
};

module.exports = {
    getDetails
};
