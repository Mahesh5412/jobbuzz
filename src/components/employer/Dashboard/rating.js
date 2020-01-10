/*
 * Purpose : This page is for rating
 * Developers :
 */
import React, { useState } from "react";
import "./App.css";


//images for rating
import logo7 from "../../../images/man.png";
import logo8 from "../../../images/gmail.png";
import logo9 from "../../../images/phone.png";
import logo10 from "../../../images/whatsapp.png";


//Rating Component

export default function Rating(props) {
  const [val, setVal] = useState(require("../../../jsonData/rating.json"));
  const [val1, setVal1] = useState(require("../../../jsonData/rating.json"));


  const SearchFilterFunction = text => {
    const newData = val1.filter(function(item) {
      const Profile = item.Profile.toUpperCase();
      const Profile1 = text.target.value.toUpperCase();
      const ApllicnDate = item.ApllicnDate.toUpperCase();
      const ApllicnDate1 = text.target.value.toUpperCase();
      return (
        Profile.indexOf(Profile1) > -1 || ApllicnDate.indexOf(ApllicnDate1) > -1
      );
    });
    setVal(newData);
  };
  
  return (
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
      {val.map(val => (
        <div className="excellentlist">
          <div className="list">
            <div style={{ marginLeft: "-13%" }}>
              <div style={{ marginLeft: "-10%" }}>
                <div>
                  <img src={logo7} width="80" />
                </div>
              </div>
              <div style={{ marginTop: -78 }}></div>

              <div style={{ marginLeft: 80, marginTop: -20 }}>
                <p>{val.Profile}</p>
                <p style={{ color: "white" }}>
                  Date of Application:{val.ApllicnDate}
                </p>
                <p style={{ color: "white" }}>
                  Contact
                  <img style={{ marginLeft: 10 }} src={logo8} width="40" />
                  <img style={{ marginLeft: 10 }} src={logo9} width="40" />
                  <img style={{ marginLeft: 10 }} src={logo10} width="40" />
                </p>
                <button style={{ backgroundColor: "green", border: "none" }}>
                  Accpet
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
