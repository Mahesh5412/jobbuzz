
/**
 * Purpose : This page is for Search Screen
 * Developers : Narendra
 */

import React, { useState } from 'react';

// importing services

import { MAIN_URL } from '../../services/config/searchConfig';
import { jobApply } from "../../services/employee/jobApply";

import { Redirect } from "react-router-dom";


//importing css

import "./welcome.css";
import "./showJobList.css";
import "./modal.css";

//importing modal css

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import moment from "moment";


//importing images

import companyLocation from "../../images/location.png";
import experience from "../../images/jobseeker.png";
import salary from "../../images/salary.png";


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

function Search(props) {

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState([]);
  const [selectJobs, setSelectJobs] = useState([]);
  const [change, setChange] = useState(false);
  const [route, setRoute] = useState(false);


  const [form, setValues] = useState({
    searchData: "",
    location: ""
  });


  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleOpen = val => {
    var i = selectJobs.filter(function (data) {
      return data.jobId === val;
    });
    console.log(i[0]);
    setModal(i[0]);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleApply = id => {
    console.log(id);
    jobApply(id);
  };

  const printSearchValues = (e) => {
    e.preventDefault();

    fetch(`${MAIN_URL}/getDetails`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        searchData: form.searchData,
        location: form.location
      })
    }).then((response) => response.json())//getting json response
      .then((responseJson) => {


        if (responseJson.status === "success") {

          setSelectJobs(responseJson.data);
          setChange(true)

        }
        if (responseJson.status === "failure") {
          console.log(responseJson);

        }
      }).catch((error) => {
        console.error(error);
      });

  };

  const redirectToHome = (val) => {
    setRoute(true)
    localStorage.setItem("jobId", val)
  }


  return (
    <div>
      {
        route ?
          <Redirect to={{
            pathname: "/home",
            state: {
              key: "Employee",
            }
          }} />
          :
          ""
      }
      <div className="search-area">
        <div className="search-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <form onSubmit={printSearchValues} className="d-md-flex justify-content-between">
                  <input
                    style={{ width: "50%", height: "60px" }}
                    placeholder="Search by job title, skills or company"
                    type="serach"
                    value={form.searchData}
                    name="searchData"
                    onChange={updateField}

                  />
                  <input
                    style={{ width: "30%", height: "60px" }}
                    placeholder="Search by Location"
                    type="serach"
                    value={form.location}
                    name="location"
                    onChange={updateField}

                  />
                  <button
                    style={{ marginLeft: '-7%', marginTop: '0px', color : 'white', backgroundColor: 'black' }}
                    className="btn btn-info btn-xs"
                    type="submit"

                  >Search</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ marginLeft: "7%", marginTop: "20px" }}>
        <div className="col-lg-12">
          <div>
            {change ? (
              <div className="col-5 " style={{ marginLeft: '7%' }}>
                {selectJobs.length !== 0 ? (
                  selectJobs.map((selectedJob, i) => {
                    return (
                      <div className="row jobListSubMain ">
                        <div className="col-4">
                          <div className="jobImage">
                            <img
                              src="https://novisync.com/img/novisync_new.png"
                              alt="companyLogo"
                              className="companyLogo"

                            />
                          </div>
                        </div>
                        <div className="col-8">
                          <div className="jobDetails" style={{ width: '237%' }}>
                            <p className="jobTitleTextWelcome">
                              {selectedJob.jobProfile}
                            </p>


                            <button
                              onClick={() => redirectToHome(selectedJob.jobId)}
                              className="btn btn-info btn-sm jobApplyBtn"
                              style={{
                                marginTop: '-58px',
                                marginLeft: '84%'
                              }}

                            >
                              Apply
                                </button>

                            <p className="companyNameText">
                              {selectedJob.company}
                            </p>
                            <div className="companyLocation">
                              <img
                                src={companyLocation}
                                className="locationImage"
                              />
                              <p className="locationText">
                                {selectedJob.branch}
                              </p>
                            </div>

                            <div className="experience">
                              <img
                                src={experience}
                                className="experienceImage"
                              />
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
                            className="btn btn-info btn-sm jobViewBtn"
                            style={{
                              marginTop: "-12%",
                              marginLeft: "184%",
                              position: "absolute"
                            }}
                          >
                            View
                              </button>
                        </div>
                      </div>
                    );
                  })
                ) : (
                    <h2>No Jobs Found</h2>
                  )}
              </div>
            ) : (
                ""
              )}

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
                      <img
                        src={require("../../images/location.png")}
                        width="20"
                      />
                    </div>
                    <p className="mr-3 modalText">{modal.branch}</p>
                    <div className="expImage">
                      <img
                        className="magleft"
                        src={require("../../images/experience.png")}
                        width="20"
                      />
                    </div>
                    <p className="mr-3 modalText">
                      {modal.experienceYearsReq}
                    </p>
                    <div className="currencyImage">
                      <img
                        className="magleft"
                        src={require("../../images/currency.png")}
                        width="20"
                      />
                    </div>
                    <p className="mr-3 modalText">
                      INR {modal.annualSalaryLakhs}
                    </p>
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
        </div>
      </div>
    </div>
  )
}

export default Search