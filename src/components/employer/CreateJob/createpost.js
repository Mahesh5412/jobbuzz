/*
 * Purpose : This page is for  createpost
 * Devlopers :
 */
import React from "react";
import logo6 from "../../../images/post.png";
import "./post.css";
/**
 * Home component For Login Registration Process*.
 */

export default function Post() {
  /**
   * function used for redirecting to DashboardScreen
   */

  function DashboardScreen() {
    window.location.href = "/employerDashboard";
  }

  return (
    <div className="createpost">
      <div>
        <img src={logo6} className="logo6" width="400" />
      </div>
      <div className="post">
        <h4 className="h3">
          SUCCESSFULLY POSTED{" "}
          <span className="h31">CHECK DASHBOARD FOR UPDATES</span>{" "}
        </h4>{" "}
      </div>
      <div>
        <button onClick={DashboardScreen} className="dashboardbtn">
          Dashboard
        </button>
      </div>
    </div>
  );
}
