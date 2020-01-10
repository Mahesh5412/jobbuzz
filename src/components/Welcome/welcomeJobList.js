import React, { useState, useEffect } from "react";

/**
 * Images for showjobList
 */

import companyLocation from "../../images/location.png";
import experience from "../../images/jobseeker.png";
import salary from "../../images/salary.png";

// JobApply  api calling
import { jobApply } from "../../services/employee/jobApply";

//link for redirecting purpose

import { Link } from "react-router-dom";

/**
 * @material-ui/core for using Modal,Backdrop and Fade
 */

//Image of technology

import techLogo from "../../images/techlogo.jpeg";

//importing trendingJobs from trendingJobs file for getting json data

import trendingJobss from "../../jsonData/trendingJobs.json";
import "./trendingJobList.css";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import moment from "moment";
import "./showJobList.css";
import "./modal.css";
import {MAIN_URL} from '../../services/config/employeeConfig';

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    marginRight: "350",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderTop: "10px solid #000",
    borderBottom: "10px solid #000",
    borderLeft: "36px solid #000",
    borderRight: "36px solid #000",
    height: "60%",
    width: "60%",
    marginTop: "14%",
    borderRadius: 20,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function WelcomejobList(props, selectedJob) {
  const [searchValue, setSearchValue] = useState({
    searchValue: selectedJob.jobProfile
  });
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState([]);
  const [selectJobs, setSelectJobs] = useState([]);
  const [jobId, setJobId] = useState([]);

  const [selectJobs1, setSelectJobs1] = useState([]);
  const [trendingJobs, SetTrendingJobs] = useState(trendingJobss);
  const [trendingJobs1, SetTrendingJobs1] = useState(trendingJobss);

  console.log(selectJobs);

  const handleOpen = val => {
    var i = selectJobs.filter(function(data) {
      return data.jobId === val;
    });
    console.log(i[0]);
    setModal(i[0]);
    setOpen(true);
  };

  console.log(modal);
  const handleClose = () => {
    setOpen(false);
  };

  const handleApply = id => {
    console.log(id);
    jobApply(id);
  };
  //function handling SearchInput
  const handleSearchInputChanges = e => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("react");
  };

  const callSearchFunction = e => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  };

  useEffect(() => {
    //data sent to the server with POST
    fetch(`${MAIN_URL}/jobDetails`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        console.log(responseJson.data);
        setSelectJobs(responseJson.data);
        setSelectJobs1(responseJson.data);
        setJobId(responseJson.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  return (
    <div>
      <div className="col-5 ">
        {selectJobs.map((selectedJob, i) => {
          return (
            <div className="row jobListSubMain ">
              <div className="col-4">
                <div className="jobImage">
                  <img
                    src={selectedJob.companyImage}
                    alt="companyLogo"
                    className="companyLogo"
                  />
                </div>
              </div>
              <div className="col-8">
                <div className="jobDetails">
                  <p className="jobTitleText">{selectedJob.jobProfile}</p>
                  <Link to="/post">
                    {" "}
                    <button
                      onClick={() => handleApply(selectedJob.jobId)}
                      className="btn btn-danger btn-sm jobApplyBtn"
                    >
                      Apply
                    </button>
                  </Link>
                  <p className="companyNameText">{selectedJob.company}</p>
                  <div className="companyLocation">
                    <img src={companyLocation} className="locationImage" />
                    <p className="locationText">{selectedJob.branch}</p>
                  </div>

                  <div className="experience">
                    <img src={experience} className="experienceImage" />
                    <p className="experienceText">
                      {selectedJob.experienceYearsReq}
                    </p>
                  </div>
                  <div className="experience">
                    <img src={salary} className="packageImage" />
                    <p className="packageText">
                      INR {selectedJob.annualSalaryLakhs}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleOpen(selectedJob.jobId)}
                  className="btn btn-danger btn-sm jobViewBtn"
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <button onClick={handleClose} className="closeButton">
              Close
            </button>
            <h6 className="text-danger font-weight-bold"></h6>
            <p className="jobProfileName">{modal.jobProfile}</p>
            <p className="companyName">{modal.company}</p>

            <div className="row ">
              <div className="location">
                <img src={require("../../images/location.png")} width="20" />
              </div>
              <p className="mr-3 modalText">{modal.branch}</p>
              <div className="expImage">
                <img
                  className="magleft"
                  src={require("../../images/experience.png")}
                  width="20"
                />
              </div>
              <p className="mr-3 modalText">{modal.experienceYearsReq}</p>
              <div className="currencyImage">
                <img
                  className="magleft"
                  src={require("../../images/currency.png")}
                  width="20"
                />
              </div>
              <p className="mr-3 modalText">INR {modal.annualSalaryLakhs}</p>
            </div>
            <div className="row dateHeading">
              <p className="mt-3 startDate">Start date</p>
              <p className="magleft mt-3 postedOn">Posted on</p>
              <p className="magleft mt-3 lastDate">Last date</p>
            </div>
            <div className="row dateShowing">
              <p className="magleft startDate">
                {moment(modal.startDate).format("MM-DD-YYYY")}
              </p>
              <p className="magleft showPostedOn">
                {moment(modal.postedOn).format("MM-DD-YYYY")}
              </p>
              <p className="magleft showLastDate">
                {moment(modal.lastDate).format("MM-DD-YYYY")}
              </p>
            </div>
            <p className="modaldesc">Description:</p>
            <p className="modaldescinfo">{modal.description}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default WelcomejobList;
