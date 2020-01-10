
/*
 * Purpose : This page is for showing Trending Jobs
 * Developers : Narendra, Swathi, Rachana, srikanth
 */

import React from "react";

//Image of technology

import techLogo from "../../../images/techlogo.jpeg";

//importing trendingJobs from trendingJobs file for getting json data

import trendingJobs from "../../../jsonData/trendingJobs.json";
import './trendingJobList.css'
function TrendingJobList() {
  return (
    <div>
      <div className="jobListSub2">
        <div className="sideHeader">Trending Skill Chart*</div>

        <div className="jobHeader">
          <div className="jobHeaderText">Trending Skills For Jobs</div>
        </div>

        <div className="TrendingJobList">
          <table className="tableList">
            <tr>
              <th></th>
              <th>Technology</th>
              <th>No of Jobs</th>
              <th>Percentage</th>
            </tr>
            {trendingJobs.map((trendingJob,i) => {
              return (
                <tr>
                  <td>
                    <img src={techLogo} />
                  </td>
                  <td>{trendingJob.technology}</td>
                  <td>{trendingJob.postitions}</td>
                  <td>{trendingJob.percentage}</td>
                </tr>
              );
            })}
          </table>
        </div>

        <div className="bottomText">
          % Shows the availability of vacant jobs in companies. (values may vary
          with time)
        </div>
      </div>
    </div>
  );
}

export default TrendingJobList;
