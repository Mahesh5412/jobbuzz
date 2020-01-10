//-----------MODIFICATION IN API IS THERE------------------//
/*
 * Purpose : This page is for User Dashboard screen
 * Developers : Narendra, Swathi, Rachana, srikanth
 */

//importing Hooks from react
import React, { useState, useEffect } from "react";
import Navigator from "../../Navigation/navigation"
//Bootstrap for adding styles
import "bootstrap/dist/css/bootstrap.css";

//importing Modal,Backdrop and Fade from @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import moment from 'moment';

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

//images
import experience from "../../../images/jobseeker.png";
import salary from "../../../images/salary.png";

import './dashboard.css';

//Makestyles for adding styles to Modal
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

//DashBoard component
export default function Dashboard() {
  
  const classes = useStyles();

  //Hooks for Modal
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState([]);

  const [inp, setInp] = useState({
    userId: localStorage.getItem("UserId"),
    jobprofile: "",
    salary: "",
    skills: "",
    special: "",
    location: "",
    experience: "",
    startdate: "",
    lastdate: "",
    description: ""
  });

  //using Hooks for setting DashboardData
  const [userId, setUserId] = useState(localStorage.getItem("jwtUserToken"));
  const [applicationSkills,setApplicationSkills]= useState([])

  //Fetching dashboard data
  useEffect(() => {

      fetch(`http://localhost:4000/employee/applicationSkills`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId })
      })
        .then(response => response.json()) //getting json response
        .then(responseJson => {
          console.log(responseJson.data);
          setApplicationSkills(responseJson.data);
        })
        .catch(error => {
          console.error(error);
        });
  }, []);

  // adding skills data in to array
    let skillsData = applicationSkills.map((data, i) => {
      return (
         data.skills
      )})
 // adding jobData in to array
      let jobData = applicationSkills.map((data, i) => {
        return (
           data.jobData
        )})
        

        console.log(jobData)

  const handleOpen = (val) => {
    console.log(val);
    var i = jobData.filter(function (data) {
      return data.applicationId === val
    });
    console.log(i[0])
    setModal(i[0])
    setOpen(true);
  };

  //function for Closing Modal
  const handleClose = () => {
    setOpen(false);
  };

  //handleSubmit function for submitting data
  const handleSubmit = evt => {
    var data = inp;

    evt.preventDefault();
    //data sent to the server with POST
    fetch("http://localhost:4000/employer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.result === "success") {
          // success response

          console.log(responseJson.result);
        }
        if (responseJson.result === "failure") {
          //failure response
          console.log(responseJson.result);
          console.log(responseJson.status);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navigator />
      <div className="row mainRow">
        <table className="table table-borderless ml-3 table-responsive">
          <thead className="head">
            <tr>
              <th>ID</th>
              <th>Job Profile</th>
              <th>Company</th>
              <th>Application Skills</th>
              <th>Status </th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {jobData.map((data, i) => {
              return (
                <tr>
                  <td className="font-weight-bold">{i + 1}</td>
                  <td className="font-weight-bold">{data.jobProfile}</td>
                  <td className="font-weight-bold">{data.company}</td>
                  <td className="font-weight-bold">{skillsData.join(',')}</td>
                  <td className="font-weight-bold">{data.jobStatus}</td>
                  <td className="font-weight-bold" ><button  className='viewdetailsbtn' onClick={()=> handleOpen(data.applicationId)}>View</button></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="background"></div>
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
             <p className="font-weight-bold">{modal.jobProfile}
               <p >{modal.company}</p>
              
              </p>
               <div className="row ">
                 <img src={require("../../../images/location.png")} />
                 <p className="location">{modal.branch}</p>
                 <img src={experience}
                   className="magleft"
                 />
                 <p className="expImage">{modal.experienceYearsReq}</p>
                 <img src={salary}
                   className="magleft"
                 />
                 <p className="currencyImage">{modal.annualSalaryLakhs}</p>
               </div>
               <div className="row">
                 <p className="startDate">-Start date</p>
                 <p className="postedOn">Posted on</p>
                 <p className="lastDate">Last date</p>
               </div>
               <div className="row dateShowing">
                  <p className="magleft startDate">{moment(modal.startDate).format('MM-DD-YYYY')}</p> 
                  <p className="magleft showPostedOn">{moment(modal.postedOn).format('MM-DD-YYYY')}</p>
                  <p className="magleft showLastDate">{moment(modal.lastDate).format('MM-DD-YYYY')}</p>
                </div>
 
               <p className="modaldesc">Description:{modal.description}</p>
                 </div>
               </Fade>
             </Modal>
      </div>
    </div>
  );
}
