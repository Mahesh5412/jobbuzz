/*
 * Purpose : This page is for postjob
 * Devlopers :
 */

import React, { useState, useEffect } from "react";
import "../Dashboard/App.css";
import "./postjob.css";

import EmployerSteps from "../Home/employerSteps";

//importing navigator for navigation
import Navigator from "../../Navigation/navigation";

// Bootstrap for adding styles
import "bootstrap/dist/css/bootstrap.css";
import "../Home/usersteps.css";

//importing react select for Selection Skills

import Select from "react-select";
import "select2";
import "select2/dist/css/select2.css";

import $ from 'jquery';

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

/*
 * @material-ui/core use for Moadal,Backdrop,Fade
 */
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// MAIN_URL api calling
import { MAIN_URL } from "../../../services/config/employerConfig";

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

//PostJob  component
function PostJob(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectState, setSelectState] = useState([]);
  const [skillByJobId, setSkillJobId] = useState([])

  // const [inp, setInp] = useState({
  //   userId: localStorage.getItem("UserId"),
  //   jobprofile: "",
  //   salary: "",
  //   special: "",
  //   vacancies: "",
  //   location: "",
  //   experience: "",
  //   startdate: "",
  //   lastdate: "",
  //   description: ""
  // });
  var userId = localStorage.getItem("UserId");
  const [jobprofile, setJobprofile] = useState("");
  const [salary, setSalary] = useState("");
  const [special, setSpecial] = useState("");
  const [vacancies, setVacancies] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [startdate, setStartdate] = useState("");
  const [lastdate, setLastdate] = useState("");
  const [description, setDescription] = useState("");
  const [skills, setSkills] = useState("")
  const [skillId, setSkillId] = useState("")



  console.log(props.location.state)
  const updateField = value => {
    console.log(value);
    setSelectState(value);
  };
  const [skillData, setSkillData] = useState([]);
  console.log(skillData);


  useEffect(() => {
    //data sent to the server with POST
    fetch("http://localhost:4000/employer/skillOptions", {
      method: "GET"
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body);
        if (body.data.length != 0) {
          setSkillData(body.data);
        }
      });
    if (props.location.state) {

      fetch("http://localhost:4000/employer/skillsByJobId", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          jobId: props.location.state
        })
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (body) {
          console.log(body);
          setSkillJobId(body.data[0]);
          setJobprofile(body.data[0].jobProfile)
          setSalary(body.data[0].annualSalaryLakhs)
          setSpecial(body.data[0].specialSkills)
          setVacancies(body.data[0].vacancies)
          setLocation(body.data[0].branch)
          setExperience(body.data[0].experienceYearsReq)
          setStartdate(body.data[0].startDate)
          setLastdate(body.data[0].lastDate)
          setDescription(body.data[0].description)
          setSkills(body.data[0].skill)
          setSkillId(body.data[0].skillId)
          console.log(body.data[0].annualSalaryLakhs)

        });
    }


  }, []);

  let option = [];
  skillData.map(data => {
    option.push({ label: data.skill, value: data.skillId });
  });

  const handleOpen = () => {
    console.log(lastdate)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const handleSubmit = evt => {
    var data = {
      userId,
      jobprofile,
      salary,
      special,
      vacancies,
      location,
      experience,
      startdate,
      lastdate,
      description,
      skills,
      skillId
    };
    console.log(data)
    if (data.jobprofile == "" && data.salary == "" && data.special == "" && data.vacancies == "" && data.location == "" && data.experience == "" &&  data.startdate == "" &&
    data.lastdate == "" &&
    data.description == "" &&
    data.skills == "") 
    {
      setOpen(false);
      Swal.fire({
        title: "JobBuzz",
        text: "Please Fill Mandatory Details",
        type: "warning",
        allowOutsideClick: false,
        confirmButtonText: "ok!"
      }).then(result => {
        if (result.value) {
          window.location.href="/postjob"
        }
      });
    }
    else{
    
    evt.preventDefault();

    fetch(`${MAIN_URL}/employer`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        data,
        selectState,
        jobId: props.location.state
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === "success") {
          console.log(responseJson.status);
          window.location.href = "/employerDashboard";
        }
        if (responseJson.status === "failure") {
          console.log(responseJson.status);
        }
      })
      .catch(error => {
        console.error(error);
      });
    }
  };

  console.log(skillByJobId)

  const handleChangeDateStart = (date) => {
    setStartdate(date);
  };
  const handleChangeDateEnd = (date) => {
    setLastdate(date);
  };

      //location validation

      function testInputLocation(event) {
        var value = String.fromCharCode(event.which);
        var pattern = new RegExp(/[a-zåäö ]/i);
        return pattern.test(value);
     }
  
  $('#location').bind('keypress', testInputLocation);

  return (
    <div>
      <Navigator />
      <div className="empSteps">
        <EmployerSteps></EmployerSteps>
      </div>
      <div className="col-6 inputRegister mt-3">
        <form onSubmit={e => e.preventDefault()} autoComplete="off">
          <div className=" col-12 row ">
            <div className="mr-3  inputRegisterField">
              <label>
                <input
                  className="form-control"
                  type="text"
                  value={jobprofile}
                  name="name"
                  onChange={e => setJobprofile(e.target.value)}
                  placeholder=""
                  
                />
                <span className="spanClass">Job Profile</span>
              </label>
            </div>
            <div className="inputRegisterfield">
              <label>
                <input
                  min ="0"
                  className="form-control"
                  type="number"
                  value={salary}
                  onChange={e => setSalary(e.target.value)}
                  placeholder=""
                  
                />
                <span className="spanClass">Salary/annum</span>
              </label>
            </div>
          </div>

          <div className="select">
            <Select
              class="skillSelection"

              onChange={e => setSkills(e.target.value)}
              onChange={updateField}
              options={option}
              isMulti
              placeholder={skillByJobId.skill ? skillByJobId.skill : "Please Select Skill"}
            ></Select>
          </div>
          <div>
            <label>
              <input
                type="text"
                placeholder=""
                value={special}
                onChange={e => setSpecial(e.target.value)}
                className="form-control"
                
              />
              <span className="spanClass">Special Skills </span>
            </label>
          </div>
          <div>
            <label>
              <input
                min ="0"
                type="number"
                placeholder=""
                value={vacancies}
                onChange={e => setVacancies(e.target.value)}
                className="form-control"
                

              />
              <span className="spanClass">Vacancies</span>
            </label>
          </div>

          <div className="col-12 row">
            <div className="mr-3">
              <label>
                <input
                  id="location"
                  type="text"
                  placeholder=""
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                  className="form-control"
                />{" "}
                <span className="spanClass">Location</span>
              </label>
            </div>
            <div className="">
              <label>
                <input
                  min ="0"
                  type="number"
                  placeholder=""
                  value={experience}
                  onChange={e => setExperience(e.target.value)}
                  className="form-control"
                />{" "}
                <span className="spanClass">Experience in Years</span>
              </label>
            </div>
          </div>

          <div className=" col-12 row ">
            <div className="mr-3">
              <label>
                <input
                  type="date"
                  placeholder=""
                  value={startdate}
                  onChange={e => setStartdate(e.target.value)}
                  className="form-control"
                />
                <span className="spanClass">Start Date</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="date"
                  placeholder=""
                  value={lastdate}
                  onChange={e => setLastdate(e.target.value)}
                  className="form-control"
                />{" "}
                <span className="spanClass">Last date</span>
              </label>
            </div>
          </div>
          {/* <label>start date</label>
          <div className="inputUserField" style={{ marginBottom: '20px' }}>
            <DatePicker
              showYearDropdown
              selected={startdate}
              onChange={handleChangeDateStart}
              className="form-control"
            />
          </div>
          <label>Last date</label>
          <div className="inputUserField" style={{ marginBottom: '20px' }}>
            <DatePicker
              showYearDropdown
              selected={lastdate}
              onChange={handleChangeDateEnd}
              className="form-control"
            />
          </div> */}
          <div className="inputRegisterfield ">
            <label>
              <input
                placeholder=""
                value={description}
                onChange={e => setDescription(e.target.value)}
                className="form-control"
              />
              <span className="spanClass">Description</span>
            </label>
          </div>
          <button onClick={handleOpen} type="submit" className="preview">
            PREVIEW
          </button>
        </form>

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
              <h6 className="text-danger font-weight-bold">{jobprofile}</h6>
              <p>Novisync Pvt Ltd</p>
              <div className="row ">
                <img src={require("../../../images/location.png")} />
                <p className="mr-3">{location}</p>
                <img
                  className="magleft"
                  src={require("../../../images/experience.png")}
                />
                <p className="mr-3">{experience}</p>
                <img
                  className="magleft"
                  src={require("../../../images/currency.png")}
                />
                <p className="mr-3">{location}</p>
              </div>
              <div className="row">
                <p className="mt-3">Start date</p>
                <p className="magleft mt-3">Last date</p>
              </div>
              <div className="row">
                <p className="magleft  ">{startdate}</p>
                <p className="magleft ">{lastdate}</p>
              </div>


              <p className="modaldesc">Description:{description}</p>
              <button
                className="modalsubmit"
                type="submit"
                onClick={handleSubmit}
                style={{ color: 'white', marginTop: '0%' }}
              >
                Post
              </button>
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
export default PostJob;
