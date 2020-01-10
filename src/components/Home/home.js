/*
 * Purpose : This page is for User Registration and Login
 * Developers : Narendra, Swathi, Rachana, srikanth
 */

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./home.css";
import Navigator from "../Navigation/navigation";

import "sweetalert2/src/sweetalert2.scss";

import { useSelector, useDispatch } from "react-redux";
import { front, back, register, login } from "../../actions";

// React Card Flip is allows you to use the card flipping animation


import ReactCardFlip from "react-card-flip";

import { handleRegister } from "../../services/auth/userRegister";
import { handleLogin } from "../../services/auth/userLogin";
 
// Image for Home page

import loginSideLogo from "../../images/login.png";
import { jobApply } from "../../services/employee/jobApply";

import $ from 'jquery';

/**
 * Home component For Login Registration Process*.
 */
function Home(props) {

  const [userDetails, setUserDetails] = useState([]);
  const [userSkills, setUserSkills] = useState([]);
  const [isToken, setIsToken] = useState(
    localStorage.getItem("jwtMobileToken")
  );


  

  useEffect(() => {

    if (localStorage.getItem("jwtMobileToken") && localStorage.getItem("jwtEmailToken") && localStorage.getItem("jwtEmailToken") && localStorage.getItem("isLogged")) {

    fetch("http://localhost:4000/employee/getData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isToken })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        if (body.data.length != 0) {
          setUserDetails(body.data[0]);
        }
        else{
          setUserDetails("");
        }
      });
    fetch("http://localhost:4000/employee/getSkills", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: localStorage.getItem("jwtUserToken") })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        if (body.data.length != 0) {
        
          setUserSkills(body.data)
        }
      });
  } }
  , []);

  console.log(userDetails)


  const skills = userSkills.map(data =>{
    return data
  })

  if(localStorage.getItem("jwtMobileToken") && localStorage.getItem("jwtEmailToken") && localStorage.getItem("jwtEmailToken") && localStorage.getItem("isLogged")) {

    if (userDetails.name === "" && userDetails.email === "" && userDetails.graduation === "" && userDetails.gradDate === "" && userDetails.sector === "" && userDetails.location === "" && userDetails.visaType === "") {
      window.location.href = "/jobGuide"
    }else if(skills.length < 0){
      window.location.href = "/JobProbability"
    }else if(localStorage.getItem("jobId")){
      jobApply(localStorage.getItem("jobId"))
      window.location.href="/post"
    }
  }

  if (localStorage.getItem("Mobile") && localStorage.getItem("UserId") && localStorage.getItem("isLogged")) {

    window.location.href = "/platform"
  }


  const flip = useSelector(state => state.flip);
  const dispatcher = useDispatch();
  const [valid, setValid] = useState(false);
  const [error, setError] = useState("");
  const [key, setKey] = useState(props.location.state.key);

  localStorage.setItem("erole", key)

  const [form, setValues] = useState({
    name: "",
    password: "",
    cpassword: "",
    mobile: "",
    email: "",
  });

  const printRegisterValues = e => {
    e.preventDefault();
    dispatcher(register(form));
    handleRegister(
      form.name,
      form.email,
      form.mobile,
      form.password,
      form.cpassword,
      key
    );
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const printLoginValues = (e) => {
    e.preventDefault();
    isValid(e);
    console.log(form);
    if (!isValid(form)) {
      console.log("done");
      dispatcher(login(form));
      handleLogin(form.name, form.password);
    }
  };

  const isValid = (e) => {
    console.log(e.name);
    var ep_emailval = e.name;
    console.log(ep_emailval);
    var intRegex = /[0-9 -()+]+$/;
    if (intRegex.test(ep_emailval)) {
      console.log("is phone");
      if ((ep_emailval.length <= 9) || (!intRegex.test(ep_emailval))) {
        setError('Please enter a valid phone number.');
        //return false;
      }
    }
    else {
      var eml = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      console.log("is email");
      if (eml.test(ep_emailval) == false) {
        setError("Please enter valid email address.");
        //return false;
      }
    }
    return valid
  };

  //name validation

  function testInputName(event) {
    var value = String.fromCharCode(event.which);
    var pattern = new RegExp(/[a-zåäö ]/i);
    return pattern.test(value);
 }
 //mobile number validation

 function testInputMobile(event) {
  var value = String.fromCharCode(event.which);
  var pattern = new RegExp(/^\d*$/i);
  return pattern.test(value);
}

 $('#name').bind('keypress', testInputName);
 $('#mobile').bind('keypress', testInputMobile);



  return (
    <div className="">
      <Navigator name={key} />
      <div className="mainContainer">
        <div className="mainLoginRegister">
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div key="front" className="register">
              <div className="registerSide">
                <h4 className="text-light font-weight-bold">WELCOME TO</h4>
                <div className="createLogo">
                  <img src={require('../../images/jobbuzzlogo.png')} width={250} height={40} />
                </div>
                <button
                  onClick={() => dispatcher(front())}
                  className="buttonHome"
                >
                  Login
                </button>
              </div>
              <div className="registerMain">
                <div className="registerName">CREATE ACCOUNT</div>
                <div className="col-6 inputRegister">
                  <form onSubmit={printRegisterValues}>
                    <div className="inputRegisterField">
                      <label>
                        <input
                          id="name"
                          className="form-control"
                          type="text"
                          value={form.name}
                          name="name"
                          onChange={updateField}
                          placeholder=""
                          
                          required
                        />
                        <span className="spanClass">Enter Your Name</span>
                      </label>
                    </div>
                    <div className="inputRegisterField">
                      <label>
                        <input
                          id="mobile"
                          maxLength="10"
                          className="form-control"
                          type="text"
                          value={form.mobile}
                          name="mobile"
                          onChange={updateField}
                          placeholder=""
                          required
                        />
                        <span className="spanClass">Enter Mobile Number</span>
                      </label>
                    </div>
                    <div className="inputRegisterField">
                      <label>
                        <input
                          className="form-control"
                          type="email"
                          value={form.email}
                          name="email"
                          onChange={updateField}
                          placeholder=""
                          required
                        />
                        <span className="spanClass">Enter Email</span>
                      </label>
                    </div>
                    <div className="inputRegisterField">
                      <label>
                        <input
                          id="password"
                          className="form-control"
                          type="password"
                          value={form.password}
                          name="password"
                          onChange={updateField}
                          placeholder=""
                          required
                        />
                        <span className="spanClass">Enter Password</span>
                      </label>
                    </div>
                    <div className="inputRegisterField">
                      <label>
                        <input
                          className="form-control"
                          type="password"
                          value={form.cpassword}
                          name="cpassword"
                          onChange={updateField}
                          placeholder=""
                          required
                        />
                        <span className="spanClass">Confirm Password</span>
                      </label>
                    </div>

                    <div className="inputRegisterButton">
                      <button className="buttonHomeSide" type="submit">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div key="back" className="login">
              <div className="loginSide">
                <h4 className="text-light font-weight-bold">WELCOME TO</h4>
                <div className="jobbuzzLogo">
                  <img src={require('../../images/jobbuzzlogo.png')} width={250} height={40} />
                </div>
                <button
                  onClick={() => dispatcher(back())}
                  className="buttonHome"
                >
                  SIGN UP
                </button>
              </div>
              <div className="loginMain">
                <div className="loginName">SIGN IN TO JOBBUZZ</div>
                <div className="loginContent">
                  <div className="col-6 inputLogin">
                    <form onSubmit={printLoginValues}>
                      <div className="inputLoginField">
                        <label>
                          <input
                            className="form-control"
                            type="text"
                            value={form.name}
                            name="name"
                            onChange={updateField}
                            placeholder=""
                            required
                          />
                          <span className="spanClass">
                            Enter Your Mobile/Email
                          </span>
                        </label>
                      </div>
                      <div className="inputLoginField">
                        <label>
                          <input
                            className="form-control"
                            type="password"
                            value={form.password}
                            name="password"
                            onChange={updateField}
                            placeholder=""
                            required
                          />
                          <span className="spanClass">Enter Password</span>
                        </label>
                      </div>
                      <div className="inputLoginFieldButton">
                        <button className="buttonHomeSide" type="submit">
                          Login
                        </button>
                      </div>
                      <div className="loginSideLogo">
                        <img src={loginSideLogo} width="180" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
}

export default Home;
