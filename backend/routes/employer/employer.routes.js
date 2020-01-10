/*
 * Purpose : Employee Router file
 * Devlopers : Sethu, neha,Saiteja
 */


var express = require('express');
var router = express.Router();
var employerCtrl = require('../../controllers/employer/employer.controller');


// /* Creating company details  */
router.post('/companyDetails',employerCtrl.companyDetails );

// /* Selecting dashboard data  */
 router.post("/dashboard", employerCtrl.dashboard);

 /* skillOptions
 post route for getting data */
 router.get('/skillOptions', employerCtrl.skillOptions);

// /* Inserting Employer Data  */
router.post("/employer", employerCtrl.employer)

// /* Selecting company data  */
router.post('/getData',employerCtrl.getdata )

// /* Selecting company data  */
router.post('/noOfCount',employerCtrl.noOfCount )

// /* Selecting company data  */
router.post('/applyDetails',employerCtrl.applyDetails )

// /* accepting user data  */
router.post('/acceptDetails',employerCtrl.acceptDetails )

// /* skillsByJobId */
router.post('/skillsByJobId',employerCtrl.skillsByJobId)


// /*AppliedApplicants*/ 
router.post('/AppliedApplicants',employerCtrl.AppliedApplicants)

module.exports = router;
