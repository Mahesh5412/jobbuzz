/*
 * Purpose : Authentication Router file
 * Devlopers : Sethu, neha,Saiteja
 */

var express = require('express');
var router = express.Router();
var authCtrl = require('../../controllers/authentication/auth.controller');

/* Registration USER 
 post route for getting data */

 router.post('/userRegister',authCtrl.userRegister );

 /* userLogin
  post route for getting data */
 
 router.post('/userLogin', authCtrl.userLogin);


 module.exports = router;