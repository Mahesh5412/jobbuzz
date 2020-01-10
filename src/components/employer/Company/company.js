/*
 * Purpose : This page is for platform
 * Devlopers :
 */
import React, { useState, useEffect } from "react";
import Navigator from "../../Navigation/navigation";

//Image for EmployerHome
import logo from "../../../images/analysis.png";
import logo1 from "../../../images/cv.png";

import { useSelector, useDispatch } from "react-redux";
import { cdetails } from "../../../actions";

// handledetails api calling
import { handledetails } from "../../../services/employer/platformService";

//MAIN_URL api calling
import { MAIN_URL } from "../../../services/config/employerConfig";

import $ from 'jquery';


//paltform  component
function Platform(props) {
  const [cname, setName] = useState("");
  const [cemail, setEmail] = useState("");
  const [cnumber, setNumber] = useState("");
  const [vertical, setVertical] = useState("");
  const [branch, setBranch] = useState("");
  const cinfo = useSelector(state => state.cinfo);
  const dispatcher = useDispatch();

  const [userId, setuserId] = useState(localStorage.getItem("UserId"));

  useEffect(() => {
    fetch(`${MAIN_URL}/getData`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        if (body.data.length != 0) {
          setName(body.data[0].company);
          setEmail(body.data[0].contactEmail);
          setNumber(body.data[0].contact);
          setVertical(body.data[0].industryType);
          setBranch(body.data[0].branch);
        }
      });
  }, []);

  const printdetails = e => {
    e.preventDefault();

    var data = {
      userId,
      cname,
      cemail,
      cnumber,
      vertical,
      branch
    };
    console.log(data);
    handledetails(data);
  };

    //location validation

    function testInputLocation(event) {
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

$('#mobile').bind('keypress', testInputMobile);
$('#location').bind('keypress', testInputLocation);

  return (
    <div className="platform">
      <div className="jobGuide">
        <Navigator/>

        <div className="input">
          <h3 style={{ color: "white", marginLeft: 582 }}>
            WELCOME TO THE MOST EASY PLATFORM TO GET MOST SKILLED EMPLOYEE{" "}
          </h3>
          <div className="analysis">
            <div>
              <img
                style={{
                  marginLeft: 160,
                  backgroundColor: "white",
                  opacity: 0.5
                }}
                src={logo1}
                width="80"
              />

              <img
                style={{
                  marginLeft: 160,
                  backgroundColor: "white",
                  opacity: 0.5
                }}
                src={logo}
                width="80"
              />
            </div>
          </div>

          <h4 style={{ marginLeft: 510, color: "white" }}>
            Follow the steps then skilled employees follows you
          </h4>
        </div>

        <div className="co-orporate">
          <h4 style={{ color: "red" }}>CO-ORPORATE</h4>
          <h6 style={{ color: "gray" }}>Details</h6>
        </div>

        <div className="col-6 inputLogin">
          <form onSubmit={printdetails} autoComplete="off">
            <div className="inputLoginField2">
              <label>
                <input
                  style={{ width: 400 }}
                  className="form-control"
                  type="text"
                  value={cname}
                  name="cname"
                  onChange={e => setName(e.target.value)}
                  placeholder=""
                  required
                />
                <span className="spanClass" style={{color: 'white' ,fontWeight : 'bold'}}>Corporate name</span>
              </label>
            </div>
            <div className="inputLoginField2">
              <label>
                <input
                  style={{ width: 400 }}
                  className="form-control"
                  type="text"
                  value={cemail}
                  name="cemail"
                  onChange={e => setEmail(e.target.value)}
                  placeholder=""
                  required
                />
                <span className="spanClass" style={{color: 'white' ,fontWeight : 'bold'}}>Corporate contact email</span>
              </label>
            </div>

            <div className="inputLoginField2">
              <label>
                <input
                  id="mobile"
                  style={{ width: 400 }}
                  className="form-control"
                  type="text"
                  value={cnumber}
                  name="cnumber"
                  onChange={e => setNumber(e.target.value)}
                  placeholder=""
                  maxLength="10"
                  required
                />
                <span className="spanClass" style={{color: 'white' ,fontWeight : 'bold'}}>Corporate contact number</span>
              </label>
            </div>

            <div className="inputLoginField2">
              <label>
                <input
                  style={{ width: 400 }}
                  className="form-control"
                  type="text"
                  value={vertical}
                  name="vertical"
                  onChange={e => setVertical(e.target.value)}
                  placeholder=""
                  required
                />
                <span className="spanClass" style={{color: 'white' ,fontWeight : 'bold'}}>Industry vertical</span>
              </label>
            </div>
            <div className="inputLoginField2">
              <label>
                <input
                  id="location"
                  style={{ width: 400 }}
                  className="form-control"
                  type="text"
                  value={branch}
                  name="location"
                  onChange={e => setBranch(e.target.value)}
                  placeholder=""
                  required
                />
                <span className="spanClass" style={{color: 'white' ,fontWeight : 'bold'}}>Location</span>
              </label>
            </div>

            <div>
              <button
                onSubmit={() => dispatcher(cdetails())}
                cinfo={cinfo}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  marginLeft: 435
                }}
                className="buttonHomeSide"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Platform;
