
/*
 * Purpose : This page is for  ShowJobList
 * Developers : Narendra, Swathi, Rachana, srikanth, Tulasi
 */

import React, { useState, useEffect } from "react";

/**
 * Images for showjobList
 */

import companyLocation from "../../../images/location.png";
import experience from "../../../images/jobseeker.png";
import salary from "../../../images/salary.png";

// JobApply  api calling
import { jobApply } from "../../../services/employee/jobApply";

//link for redirecting purpose

import { Link } from 'react-router-dom';

//importing trendingJobs from trendingJobs file for getting json data

import trendingJobss from "../../../jsonData/trendingJobs.json";
import './trendingJobList.css'
import { BrowserRouter as Redirect } from "react-router-dom";


import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import moment from 'moment';

import './modal.css';
import {MAIN_URL} from '../../../services/config/employeeConfig';

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


function JobList(props,selectedJob) {
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
  const [route,setRoute] = useState(false);


  console.log(selectJobs)

  const handleOpen = (val) => {
    var i = selectJobs.filter(function (data) {
      return data.jobId === val
    });
    console.log(i[0])
    setModal(i[0])
    setOpen(true);
  };

  console.log(modal)
  const handleClose = () => {
    setOpen(false);
  };

  const handleApply = (id) => {
    console.log(id);
    jobApply(id);
  };
//function handling SearchInput
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("react")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField()
    
  }

  const RedirectToEdit = (val) => {
    window.location.href="/jobguide"
  };

  useEffect(() => {

    //data sent to the server with POST
    fetch(`${MAIN_URL}/jobDetails`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson)
        console.log(responseJson.data)
        setSelectJobs(responseJson.data);
        setSelectJobs1(responseJson.data);
        setJobId(responseJson.data);
      }).catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(route)

  //search functionality

  const SearchFilterFunction1 = (text) => {
    console.log(text.target.value);
  //   address: ""
  // annualSalaryLakhs: 0
  // branch: ""
  // company: "novisync"
  // companyId: 1
  // companyImage: ""
  // contact: "989898998"
  // contactEmail: "Novisync@gmail.com"
  // description: ""
  // experienceYearsReq: 0
  // industryType: "IT"
  // jobId: 8
  // jobProfile: "asd"
  // lastDate: "2019-09-23T18:30:00.000Z"
  // postedOn: "0000-00-00"
  // startDate: "2019-09-14T18:30:00.000Z"
  // userId: 7
  // vacancies: 0
  // website: ""
   // console.log(selectJobs1);
  const newData = selectJobs1.filter(function (item) {
    console.log(item);
   //console.log(item.technology);
  //  const annualSalaryLakhs = item.annualSalaryLakhs.toUpperCase()
  //  const annualSalaryLakhs1 = text.target.value.toUpperCase()
  //  const branch = item.branch.toUpperCase()
  //  const branch1 = text.target.value.toUpperCase()
   const company = item.company.toUpperCase()
   const company1 = text.target.value.toUpperCase()
  //  const address = item.address.toUpperCase()
  //  const address1 = text.target.value.toUpperCase()
    const contact = item.contact.toUpperCase()
    const contact1 = text.target.value.toUpperCase()
    const contactEmail = item.contactEmail.toUpperCase()
    const contactEmail1 = text.target.value.toUpperCase()
    // const description = item.description.toUpperCase()
    // const description1 = text.target.value.toUpperCase()
    const industryType = item.industryType.toUpperCase()
    const industryType1 = text.target.value.toUpperCase()
    const jobProfile = item.jobProfile.toUpperCase()
    const jobProfile1 = text.target.value.toUpperCase()
    // const website = item.website.toUpperCase()
    // const website1 = text.target.value.toUpperCase()
    // const postedOn = item.postedOn.toUpperCase()
    // const postedOn1 = text.target.value.toUpperCase()
  
    // return annualSalaryLakhs.indexOf(annualSalaryLakhs1) > -1 ||
    // branch.indexOf(branch1) > -1 ||
    // company.indexOf(company1) > -1 ||
    // address.indexOf(address1) > -1 ||
    // contact.indexOf(contact1) > -1 ||
    // contactEmail.indexOf(contactEmail1) > -1 ||
    // description.indexOf(description1) > -1 ||
    // jobProfile.indexOf(jobProfile1) > -1 ||
    // website.indexOf(website1) > -1 ||
    // postedOn.indexOf(postedOn1) > -1 ||
    // industryType.indexOf(industryType1) > -1 
  
    return company.indexOf(company1) > -1 ||
    // address.indexOf(address1) > -1 ||
    contact.indexOf(contact1) > -1 ||
    contactEmail.indexOf(contactEmail1) > -1 ||
    // description.indexOf(description1) > -1 ||
    jobProfile.indexOf(jobProfile1) > -1 ||
    // website.indexOf(website1) > -1 ||
    // postedOn.indexOf(postedOn1) > -1 ||
    industryType.indexOf(industryType1) > -1 
  })
  setSelectJobs(newData);
  }

  const SearchFilterFunction = (text) => {
    console.log(text.target.value);
 const newData = trendingJobs1.filter(function (item) {
   console.log(item.technology);
    const technology = item.technology.toUpperCase()
    const technology1 = text.target.value.toUpperCase()
    const postitions = item.postitions.toUpperCase()
    const postitions1 = text.target.value.toUpperCase()
    const percentage = item.percentage.toUpperCase()
    const percentage1 = text.target.value.toUpperCase()
    return technology.indexOf(technology1) > -1 ||
    postitions.indexOf(postitions1) > -1 ||
    percentage.indexOf(percentage1) > -1 
  })
  SetTrendingJobs(newData);
}

  return (
    <div>
      <div
        className="searchBar"
        style={{
          height: "109px",
          marginTop: "22%",
          backgroundColor: "#d6d6d6",
          paddingTop: "10px",
          width: "80%",
          marginLeft: "10%",
          borderRadius: "1%",
          boxShadow: "1px 1px 1px"
        }}
      >
        <div className="jobProfile">
          <label className="jobProfileInputWidth">
            <input
              className="form-control"
              type="search"
              className="form-control"
              name="jobProfile"
              placeholder=""
              onChange={SearchFilterFunction1}
              required
            />
            <span value={searchValue}
          onChange={(handleSearchInputChanges,callSearchFunction,SearchFilterFunction)} className="spanClass">Search Job By Profile, Skills</span>
          </label>
        </div>
        <div className="editProfile">
          <button className="btn editProfileBtn" 
          onClick={() => RedirectToEdit(localStorage.getItem("jwtUserToken"))}
          >Edit</button>
        </div>
        <div className="jobProfileText">
          <p>You Can Edit Your Skills Before Apply For Job</p>
        </div>
      </div>
      <div className="jobListMain">
        <div className="row">
          <div className="col-5 ">

            {selectJobs.map((selectedJob, i) => {

              return (
                <div className="row jobListSubMain " >
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
                    <div className="jobDetails">
                      <p className="jobTitleText">{selectedJob.jobProfile}</p>
                      <Link to="/post"> <button onClick={() => handleApply(selectedJob.jobId)} className="btn btn-danger btn-sm jobApplyBtn">
                        Apply
                      </button>
                      </Link>
                      <p className="companyNameText">
                        {selectedJob.company}
                      </p>
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
                   
                    <button type="button" onClick={() => handleOpen(selectedJob.jobId)} className="btn btn-danger btn-sm jobViewBtn">
                        View
                    </button>

                  </div>
                </div>
              );
            })}
          </div>


          < Modal

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
                <p className="jobProfileName" >{modal.jobProfile}</p>
                <p className="companyName">{modal.company}</p>

                <div className="row ">
                  <div className="location">
                    <img src={require("../../../images/location.png")} width="20" />
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
                  <p className="mr-3 modalText">INR {modal.annualSalaryLakhs}</p>
                </div>
                <div className="row dateHeading">
                  <p className="mt-3 startDate">Start date</p>
                  <p className="magleft mt-3 postedOn">Posted on</p>
                  <p className="magleft mt-3 lastDate">Last date</p>
                </div>
                <div className="row dateShowing">
                  <p className="magleft startDate">{moment(modal.startDate).format('MM-DD-YYYY')}</p> 
                  <p className="magleft showPostedOn">{moment(modal.postedOn).format('MM-DD-YYYY')}</p>
                  <p className="magleft showLastDate">{moment(modal.lastDate).format('MM-DD-YYYY')}</p>
                </div>
                  <p className="modaldesc">Description:</p>
                  <p className="modaldescinfo">{modal.description}</p>
              </div>
            </Fade>
          </Modal>

        </div>
      </div>
    </div>
  );
}

export default JobList;
