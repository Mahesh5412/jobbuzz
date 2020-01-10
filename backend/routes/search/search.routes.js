/*
 * Purpose : Employee Router file
 * Devlopers : Sethu, neha,Saiteja
 */


var express = require('express');
var router = express.Router();
var searchCtrl = require('../../controllers/search/search.controller');

// /* Creating company details  */
router.post('/getDetails', searchCtrl.getDetails);


module.exports = router;
