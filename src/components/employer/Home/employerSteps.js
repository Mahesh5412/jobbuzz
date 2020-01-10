
/*
 * Purpose : This page is for EmployerSteps
 * Devlopers : 
 */
import React from 'react';
import './usersteps.css'


//Link for Redirecting Purpose
import {Link} from 'react-router-dom';

// EmployerSteps Component
function EmployerSteps (){
  return ( 
    <div> 
      <div className="userContainer1"> 
          <div className="circle1" > 
            <p className="jg"></p> 
            <p className="circleText">Step 1</p> 
          </div> 
        <div className="circle2"> 
          <p className="pm"></p> 
          <p className="circleText">Step 2</p>
        </div>
        
    </div>
      <div className="userContainer2">
        <Link to="/postjob"> 
        <div className="box1">
          <p className="jg">CREATE JOB POST</p>
        </div>
        </Link>
        <Link to="/employerDashboard">
        <div className="box2">
          <p className="pm">DASHBOARD</p>
        </div>
        </Link>
      
    </div>
    </div>
  );
}

export default EmployerSteps;