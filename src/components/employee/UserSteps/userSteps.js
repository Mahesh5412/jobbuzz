/*
 * Purpose : page showing jobguide,jobProbability and TrendingJobs steps
 * Devlopers : Narendra, Swathi, Rachana, srikanth
 */
import React from "react";

//link for redirecting purpose

import { Link } from "react-router-dom";
import "./userSteps.css";
//userSteps Component

function UserSteps() {
  return (
    <div>
      <div className="userContainer1">
        <div className="circle1">
          <p className="jg"></p>
          <p className="circleText">Step 1</p>
        </div>
        <div className="circle2">
          <p className="pm"></p>
          <p className="circleText">Step 2</p>
        </div>
        <div className="circle3">
          <p className="tj"></p>
          <p className="circleText">Step 3</p>
        </div>
      </div>
      <div className="userContainer2">
        <Link to="/jobGuide">
          <div className="box1">
            <p className="jg">Add Details</p>
          </div>
        </Link>
        <Link to="/jobProbability">
          <div className="box2">
            <p className="pm">Add Skills</p>
          </div>
        </Link>
        <Link to="/trending">
          <div className="box3">
            <p className="tj">Job List</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default UserSteps;
