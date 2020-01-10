/*
 * Purpose : This page is for successfully Applied Post
 * Developers : Narendra, Swathi, Rachana, srikanth
 */

import React from "react";

// Image for Post screen

import logo6 from "../../../images/post.png";
import "./post.css";
import Navigator from '../../Navigation/navigation'

/**
 * Home component For Login Registration Process*.
 */

export default function Post() {
  /**
   * function used for redirecting to DashboardScreen
   */

  function DashboardScreen() {
    window.location.href = "/employeeDashboard";
  }

  return (
    <div>
      <Navigator />
    
    <div className="createpost">
      <div className="mainImage">
        <img src={logo6} className="logo6" width="400" />
      </div>
      <div className="post">
          <center>
        <h4 className="successMsg">
          SUCCESSFULLY APPLIED
          <br/>
          <span className="checkStatus">CHECK DASHBOARD FOR UPDATES</span>
        </h4>
        </center>
      </div>
      <div>
        <button onClick={DashboardScreen} className="dashboardbtn">
          Dashboard
        </button>
      </div>
    </div>
    </div>
  );
}
