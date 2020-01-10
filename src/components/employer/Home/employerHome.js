/*
 * Purpose : This page is for EmployerHome
 * Devlopers :
 */
import React, { useState, useEffect } from "react";
import EmployerSteps from "./employerSteps";
import Navigation from "../../Navigation/navigation";
import { Link } from "react-router-dom";

//MAIN_URL api calling
import { MAIN_URL } from "../../../services/config/employerConfig";

// EmployerHome Component
function EmployerHome() {

  const [userId, setuserId] = useState(localStorage.getItem("UserId"));

  const [verify, setVerify] = useState(false)

  useEffect(() => {
    fetch(`${MAIN_URL}/getData`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body.data.length)
        if (body.data.length === 0) {
          setVerify(true)
        }
      });
  }, []);

  return (
    <div>
      <Navigation />
      {
        verify === false ?
          <EmployerSteps />
          :
          <div>
            <center>
              <h3><Link to="/platform">Please Update Compnay Details</Link></h3>
            </center>
          </div>
      }
    </div>
  );
}

export default EmployerHome;
