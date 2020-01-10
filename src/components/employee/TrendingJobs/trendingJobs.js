
/*
 * Purpose : This page is for TrendingJobs
 * Devlopers : Narendra, Swathi, Rachana, srikanth
 */
import React from "react";
import UserSteps from "../UserSteps/userSteps";
import JobList from "./showJobList";
import Navigator from '../../Navigation/navigation'

function TrendingJobs() {
  return (
    <div>
      <Navigator />
      <UserSteps />
    <div style={{marginTop: '-2%'}}>
      
      <JobList />
    </div>
    </div>
  );
}

export default TrendingJobs;
