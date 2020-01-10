/*
 * Purpose : This page is for navigation bar
 * Developers : Narendra, Swathi, Rachana, srikanth
 */

import React from "react";

// Bootstrap for adding styles

import { Navbar, Nav } from "react-bootstrap";


//Link is used for linking purpose

import { Link } from "react-router-dom";
import "../Home/App.css";

import jbemployee from "../../images/logo/jobzbuzzemployee.png";
import jbemployer from "../../images/logo/jobzbuzzemployer.png";

function Navigator(props) {

  // function for logout purpose
  const logout = () => {
    localStorage.removeItem("jwtMobileToken");
    localStorage.removeItem("jwtUserToken");
    localStorage.removeItem("jwtEmailToken");
    localStorage.removeItem("Mobile");
    localStorage.removeItem("UserId");
    localStorage.removeItem("isLogged");
    localStorage.removeItem("role");
    localStorage.removeItem("jobId");
    window.location.href = "/";
  };

  //const for getting jwtMobileToken
const isLogged = localStorage.getItem("isLogged");
const role = localStorage.getItem("role");
const key = localStorage.getItem("erole");

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        {
          isLogged  ?
        
        (role === "employee" ? (
          <Navbar.Brand href="/employeeHome">
            <img src={jbemployee} width="330"/>
          </Navbar.Brand>
        ) : (
          <Navbar.Brand href="/employerHome">
            <img src={jbemployer} width="330" />
          </Navbar.Brand>
        ))
        :
          (
            key === "Employee" ?
            <Navbar.Brand href="/">
            <img src={jbemployee} width="230"/>
            </Navbar.Brand>
            :
            <Navbar.Brand href="/">
            <img src={jbemployer} width="230"/>
            </Navbar.Brand>
          )
        }

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            { isLogged  ?
        (<Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          {role === "employee" ? (
            <Nav>
              <Link to="/jobGuide">
                <button className="buttonHome">Home</button>
              </Link>
              <Link to="/employeeDashboard">
                <button className="buttonHome">Home</button>
              </Link>
              <button className="buttonHome" onClick={logout}>
                Logout
              </button>
            </Nav>
          ) : (
            <Nav>
            <Link to="/platform">
              <button className="buttonHome">Profile</button>
            </Link>
            <Link to="/employerHome">
              <button className="buttonHome">Home</button>
            </Link>
            <button className="buttonHome" onClick={logout}>
              Logout
            </button>
          </Nav>
          )}
        </Navbar.Collapse>
        )
        :
         "" }
      </Navbar>
    </div>
  );
}

export default Navigator;
