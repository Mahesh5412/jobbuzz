import React, { useState, useEffect } from "react";

//Bootstrap for adding styles
import "./App.css";
import "./dashboard.css";
import "./Modal.css";

//Adding images

import logo7 from "../../../images/man.png";
import logo8 from "../../../images/gmail.png";
import logo9 from "../../../images/phone.png";
import logo10 from "../../../images/whatsapp.png";

import EmployerSteps from "../Home/employerSteps";
import Navigator from "../../Navigation/navigation";


/*
 * @material-ui/core use for Moadal,Backdrop,Fade
 */

import { makeStyles } from "@material-ui/core/styles";
import logo5 from "../../../images/show.png";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

//importing moment
import moment from "moment";
import handleOpen from "../CreateJob/postjob";
import { handleAccept } from "../../../services/employer/handleAccept";

// MAIN_URL api calling
import { MAIN_URL } from "../../../services/config/employerConfig";
import Rating from "./rating";

const useEmployeModal = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  paper: {
    opacity: 0.5,
    backgroundColor: "	#000001",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: "42%",
    height: "auto",
    marginLeft: "23%",
    overflowY: "auto",
    maxHeight: "calc(114% - 136px)"
  }
}));

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
const Openview = () => {
  return handleOpen();
};

export default function Dashboard(props) {
  const classes = useStyles();
  const empModalClassess = useEmployeModal();

  const [open, setOpen] = useState("");
  const [empOpen, setEmpOpen] = useState("");
  const [modal, setModal] = useState([]);
  const [dashboardData, setDashboardData] = useState([]);
  const [applicants, setApplicants] = useState([]);
  const [applicants1, setApplicants1] = useState([]);
  const [use, setUse] = useState([]);
  const [AppliedApplicants, setAppliedApplicants] = useState([]);

  // console.log(AppliedApplicants)

  const SearchFilterFunction = text => {
    const newData = applicants1.filter(function (item) {
      const Profile = item.Profile.toUpperCase();
      const Profile1 = text.target.value.toUpperCase();
      const ApllicnDate = item.ApllicnDate.toUpperCase();
      const ApllicnDate1 = text.target.value.toUpperCase();
      return (
        Profile.indexOf(Profile1) > -1 || ApllicnDate.indexOf(ApllicnDate1) > -1
      );
    });
    setApplicants(newData);
  };

  const RedirecttoPostJob = (val) => {
    console.log(val)
    props.history.push({
      pathname: "/postjob",
      state: {
        key: val
      }
    })
  };

  const handleOpenEmpView = (val, i) => {
    setEmpOpen(true);
    console.log(i);
    setUse(applicants[i]);
    console.log(val);
  };

  const handleOpenEmpViewProfile = (val, i) => {
    setEmpOpen(true);
    console.log(i);
    setUse(applicants[i]);
    console.log(val);
  };


  const handleOpenView = val => {
    var i = dashboardData.filter(function (data) {
      return data.jobId === val;
    });
    setModal(i[0]);
    setOpen(true);
    // setOpen(true);
    console.log(val);
  };

  const handleClose = () => {
    setOpen(false);
    setEmpOpen(false);
  };

  //Fetching dashboard data

  useEffect(() => {

    fetch(`${MAIN_URL}/dashboard`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: localStorage.getItem("UserId")
      })
    })
      .then(response => response.json())
      .then(function (body) {
        console.log(body)
        // if (body[0].status !== "failed") {
          if (body.data !== "null" ) {
          setDashboardData(body.data);


          fetch(`${MAIN_URL}/applyDetails`, {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              dashboardData: body.data
            })
          })
            .then(response => response.json())
            .then(function (body) {
              setApplicants(body.data);
              console.log(body.data)
            });
        } else {
          setDashboardData([])
        }
      });



    fetch(`${MAIN_URL}/AppliedApplicants`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: localStorage.getItem("UserId")
      })
    })
      .then(response => response.json())
      .then(function (body) {
        console.log(body[0].data)
        // if (body[0].status !== "failed") {
          if (body.data !== "null" ) {
          // setAppliedApplicants(body[0].data[0].jobData)
          setAppliedApplicants(body[0].data)
        } else {
          setAppliedApplicants([])
        }
      })

  }, []);


  const userCount = applicants.map(each => {
    return each.length;
  });



  //console.log(applicants);

  return (
    <div>
      <Navigator />
      <div className="empSteps">
        <EmployerSteps></EmployerSteps>
      </div>
      <div className="fields">
        <div className="table">
          <table>
            <thead className="head">
              <tr>
                <th>ID</th>
                <th>POST PROFILE</th>
                <th>APPLICANTS</th>
                <th>ACCEPTED APPLICANTS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.map((val, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{val.jobProfile}</td>
                  <td>
                    {userCount[i]}
                    <img
                      onClick={() => handleOpenEmpView(val.jobId, i)}
                      style={{ marginLeft: 20, width: 30, marginTop: 10 }}
                      src={logo5}
                      width="80"
                    />
                  </td>
                  <td>
                    {/* {userCount[i]}
                    <img
                      onClick={() => handleOpenEmpViewProfile(val.jobId, i)}
                      style={{ marginLeft: 20, width: 30, marginTop: 10 }}
                      src={logo5}
                      width="80"
                    /> */}
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm  View"
                      type="button"

                      onClick={() => handleOpenView(val.jobId)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
                <div className="edit">
                  <img
                    src={require("../../../images/pencil.png")}
                    onClick={() => RedirecttoPostJob(modal.jobId)}
                  />
                  <div className="editText">Edit</div>
                </div>

                <h6 className="text-danger font-weight-bold"></h6>
                <p className="jobProfileName">{modal.jobProfile}</p>
                <p className="companyName">{modal.company}</p>

                <div className="row ">
                  <div className="location">
                    <img
                      src={require("../../../images/location.png")}
                      width="20"
                    />
                  </div>

                  <p className="mr-3 modalText">{modal.branch}</p>
                  <div className="expImage">
                    <img
                      className="magleft"
                      src={require("../../../images/experience.png")}
                      width="20"
                    />
                  </div>

                  <p className="mr-3 modalText">{modal.experienceYearsReq}</p>
                  <div className="currencyImage">
                    <img
                      className="magleft"
                      src={require("../../../images/currency.png")}
                      width="20"
                    />
                  </div>

                  <p className="mr-3 modalText">{modal.annualSalaryLakhs}</p>
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

                <p id="transition-modal-description">Description:</p>
                <p id="transition-modal-description">{modal.description}</p>
                <div className="mt-3 modaldiv">
                  <button

                    className="closebutton"
                    type="submit"
                    onClick={handleClose}
                  >
                    close
                  </button>
                </div>
              </div>
            </Fade>
          </Modal>

          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={empModalClassess.modal}
            open={empOpen}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500
            }}
          >
            <Fade in={empOpen}>
              <div className={empModalClassess.paper}>
                <div>
                  <div className="jobProfile">
                    <label>
                      <input
                        className="form-control"
                        type="search"
                        className="form-control jobProfileInput"
                        name="jobProfile"
                        placeholder=""
                        onChange={SearchFilterFunction}
                        required
                      />
                      <span className="spanClass" style={{ color: "white" }}>
                        Search
                      </span>
                    </label>
                  </div>
                  {use.map(val => (
                    <div className="excellentlist">
                      <div className="list">
                        <div style={{ marginLeft: "-13%" }}>
                          <div style={{ marginLeft: "-3%" }}>
                            <div>
                              <img src={logo7} width="80" />
                            </div>
                          </div>
                          <div style={{ marginTop: -78 }}></div>

                          <div style={{ marginLeft: 80, marginTop: -20 }}>
                            <p style={{ color: "white" }}>{val.userName}</p>
                            <p style={{ color: "white" }}>
                              Date of Application:{val.ApllicnDate}
                            </p>
                            <p style={{ color: "white" }}>
                              Contact
                              <img
                                style={{ marginLeft: 10 }}
                                src={logo8}
                                width="40"
                              />
                              <img
                                style={{ marginLeft: 10 }}
                                src={logo9}
                                width="40"
                              />
                              <img
                                style={{ marginLeft: 10 }}
                                src={logo10}
                                width="40"
                              />
                            </p>
                            <button
                              style={{
                                backgroundColor: "green",
                                border: "none"
                              }}
                              onClick={() =>
                                handleAccept(val.userId, val.jobId)
                              }

                            >
                              Accept
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Fade>
          </Modal>
          <div className="background"></div>
        </div>
      </div>
    </div>
  );
}
