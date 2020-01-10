/*
 * Purpose : This page is for jobGuide
 * Developers : Narendra, Swathi, Rachana, srikanth
 */

//importing useState , useEffect Hook
import React, { useState, useEffect } from "react";
import Navigator from "../../Navigation/navigation";
import UserSteps from "../UserSteps/userSteps";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';

// JobDetails  api calling
import { handleJobDetails } from "../../../services/employee/jobGuide";

// JobDetails css

import "./jobGuide.css";

//Component for JobGuide

function JobGuide() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [degree, setDegree] = useState("");
  const [completion_date, setCompletion_date] = useState();
  const [interest, setInterest] = useState("");
  const [location, setLocation] = useState("");
  const [visa_type, setVistype] = useState("");
  const [userId, setUser_id] = useState(localStorage.getItem("jwtUserToken"));
  console.log(userId)

  const [isToken, setIsToken] = useState(
    localStorage.getItem("jwtMobileToken")
  );
console.log(localStorage.getItem("jwtMobileToken"))
  const OPT = 'OPT'
  const CPT = 'CPT'

  useEffect(() => {
    //data sent to the server with POST
    console.log(localStorage.getItem("jwtUserToken"))

    fetch("http://localhost:4000/employee/getData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId:localStorage.getItem("jwtUserToken"),isToken })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body)
        if (body.data.length != 0) {
          console.log('jmnbtgfvce')
          setUser_id(body.data[0].userId);
          setName(body.data[0].userName);
          setEmail(body.data[0].email);
          setDegree(body.data[0].graduation);
          setCompletion_date(new Date(moment(body.data[0].gradDate).format("MM/DD/YYYY")));
          // setCompletion_date(body.data[0].gradDate);
          setInterest(body.data[0].skill);
          setVistype(body.data[0].visaType);
          setLocation(body.data[0].location);
          setInterest(body.data[0].sector)
        }else{

        }
      });
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();
    var data = {
      name,
      email,
      degree,
      completion_date,
      interest,
      location,
      visa_type,
      userId
    };
    handleJobDetails(data);
  };

  const handleChangeDate = (date) => {
    setCompletion_date(date);
  };

  return (
    <div>
      <Navigator />
      <UserSteps />
      <div className="jobGuide">
        <div className="userDetails">
          <form className="inputFormField" onSubmit={handleSubmit}>
            <div className="inputUserField">
              <label>
                <input
                  className="form-control inputField"
                  type="text"
                  value={name}
                  name="name"
                  onChange={e => setName(e.target.value)}
                  placeholder=""
                  required
                />
                <span className="spanClass">Enter Your Name</span>
              </label>
            </div>

            <div className="inputUserField">
              <label>
                <input
                  className="form-control inputField"
                  type="text"
                  value={email}
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  placeholder=""
                  required
                />
                <span className="spanClass">Enter Your Email</span>
              </label>
            </div>

            <div className="inputUserField">
              <label>
                <input
                  className="form-control inputField"
                  type="text"
                  value={degree}
                  name="degree"
                  onChange={e => setDegree(e.target.value)}
                  placeholder=""
                  required
                />
                <span className="spanClass etc">Enter Your Latest Degree</span>
              </label>
            </div>

            <div className="inputUserField" style={{ marginBottom: '20px' }}>
              <label className="etc">Course Completion Date</label>
              <DatePicker
                className="form-control inputField"
                showYearDropdown
                selected={completion_date}
                onChange={handleChangeDate}
              />
            </div>

            <div className="inputUserField">
              <label>
                <input
                  className="form-control inputField"
                  type="text"
                  value={interest}
                  name="interest"
                  onChange={e => setInterest(e.target.value)}
                  placeholder=""
                  required
                />
                <span className="spanClass">Area of Interest</span>
              </label>
            </div>

            <div className="inputUserField">
              <label>
                <input
                  className="form-control inputField"
                  type="text"
                  value={location}
                  name="location"
                  onChange={e => setLocation(e.target.value)}
                  placeholder=""
                  required
                />
                <span className="spanClass etc">Prefered Job Location</span>
              </label>
            </div>

            <div className="inputUserField">

              <select value={visa_type} onChange={e => setVistype(e.target.value)}
                className="form-control inputField"
                type="text"
                name="visa_type"
                placeholder=""
                style={{ marginBottom: '10px' }}
                required>
                <option value="">Select visaType</option>
                <option value={CPT}>CPT</option>
                <option value={OPT}>OPT</option>
              </select>

            </div>

            <div>
              <button className="btn inputUserButton" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default JobGuide;
