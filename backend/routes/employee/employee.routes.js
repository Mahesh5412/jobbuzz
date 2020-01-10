/*
 * Purpose : Employee Router file
 * Devlopers : Sethu, neha,Saiteja
 */


var express = require('express');
var router = express.Router();
var employeeCtrl = require('../../controllers/employee/employee.controller');

/* dashboard
 post route for select  data */
router.post('/dashboard', employeeCtrl.dashboard);

/* getdata
 post route for getting data */
router.post('/getData', employeeCtrl.getdata);

/* skillOptions
 post route for getting data */
 router.post('/skillOptions', employeeCtrl.skillOptions);


/* jobApply
 post route for getting data */

router.post('/jobApply',employeeCtrl.jobApply);

/* JOB DETAILS */
// POST method route  for gatting data
router.post('/jobDetails',employeeCtrl.jobDetails )

/* USER SKILL*/
/* insert new records in a table*/
router.post('/skills', employeeCtrl.skills);


/* USER Details */
router.post('/userDetails', employeeCtrl.userDetails)

/* Application Skills Details */
router.post('/applicationSkills', employeeCtrl.applicationSkills)

/* Application getSkills Details */
router.post('/getSkills', employeeCtrl.getSkills)


/* Application delete Details */
router.post('/deleteSkill', employeeCtrl.deleteSkill)


/* JOB DETAILS top six */
// POST method route  for gatting data
router.post('/topsix',employeeCtrl.topsix )
module.exports = router;

