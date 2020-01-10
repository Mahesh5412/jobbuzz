/**
 * Purpose : This page is for Welcome Screen
 * Developers : Narendra
 */

import React from "react";

// importing css

import "./welcome.css";
import "./showJobList.css";
import "./modal.css";

//importing search component

import Search from '../Search/search';

const Welcome = (props) => {

  //Removine erole from localstorage

  localStorage.setItem("erole", "")

  return (
    <div>
      <header className="header-area main-header">
        <div className="container">
          <div className="row" style={{ marginRight: "0px" }}>
            <div className="col-lg-2">
              <div className="logo-area">
                <a href="index.html">
                  <img
                    src={require("../../images/logo/jobzbuzz.png")}
                    alt="logo"
                    width="180"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="custom-navbar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="main-menu">
                <ul>
                  <li className="menu-btn">
                    <button
                      style={{ marginLeft: '10px', marginTop: '10px' }}
                      className="btn btn-info btn-sm"
                      onClick={() =>
                        props.history.push({
                          pathname: "/home",
                          state: {
                            key: "Employer"
                          }
                        })
                      }
                    >Post Your Job</button>

                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <hr />
      <section className="banner-area">
        <div className="container-fluid">
          <div className="row" >
            <div className="col-lg-6 px-0">
              <div className="banner-bg"></div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="banner-text">
                <h1>
                  find your dream <span>job</span> with jobzbuzz
                </h1>
                <p className="py-3">

                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row" style={{ marginRight: "0px" }}>
        <div className="col-lg-12">
          <div className="jobs-title">
            <h2 className="browse"></h2>
          </div>
        </div>
      </div>

      <Search/>

      <section className="feature-area section-padding2">
        <div className="container">
          <div className="row" style={{ marginRight: "0px" }}>
            <div className="col-lg-4">
              <div className="single-feature mb-4 mb-lg-0">
                <h4>Job Guide</h4>
                <p className="py-3">
                  Your information that helps you form an opinion or make a
                  decision about your dream job
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-feature mb-4 mb-lg-0">
                <h4>Job Probability</h4>
                <p className="py-3">
                  Job Probability is calculating your skills that particular
                  Jobs will happen in the market.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-feature">
                <h4>Trending Jobs</h4>
                <p className="py-3">
                  The trending jobs is toward working with new technologies
                  existing in the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-area section-padding">
        <div className="footer-copyright">
          <div className="row" style={{ marginRight: "0px" }}>
            <div className="col-xl-5 offset-xl-1 col-lg-6">
              <span>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | Novisync Inc
              </span>
            </div>
          </div>
        </div>
      </footer>
      <script src="assets/js/vendor/jquery-2.2.4.min.js"></script>
      <script src="assets/js/vendor/bootstrap-4.1.3.min.js"></script>
      <script src="assets/js/vendor/wow.min.js"></script>
      <script src="assets/js/vendor/owl-carousel.min.js"></script>
      <script src="assets/js/vendor/jquery.nice-select.min.js"></script>
      <script src="assets/js/vendor/ion.rangeSlider.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  );
};

export default Welcome;
