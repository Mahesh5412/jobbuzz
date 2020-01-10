/*
 * Purpose : This page is for JobProbablility
 * Developers : Narendra, Swathi, Rachana, srikanth
 */
import React, { useState, useEffect } from "react";
import UserSteps from "../UserSteps/userSteps";
import TrendingJobList from "../TrendingJobs/trendingJobList";
import Navigator from '../../Navigation/navigation';

//importing react select for Selection Skills

import Select from "react-select";
import "select2";
import "select2/dist/css/select2.css";

// Skills api calling 

import { handleSkills } from "../../../services/employee/skills";
import "./jobProbability.css";

// Addin Main URI

import { MAIN_URL } from '../../../services/config/employeeConfig';

// JobProbability component for Selection Skills

import { jobApply } from "../../../services/employee/jobApply";

function JobProbability() {
  const [selectOption, setSelectOption] = useState([]);
  const [setscreen, updateScreen] = useState(false);
  const [jobProbability, setJobProbabilty] = useState(false);
  const [showStage, setShowStage] = useState(false);
  const [disable, setDisable] = useState(false);
  const [no, setNo] = useState(0);
  const [skillData, setSkillData] = useState([]);
  const [getSkill, setGetSkill] = useState([]);
  const [isData, setIsData] = useState(false);
  const [route, setRoute] = useState(false)
  console.log(getSkill)

  console.log(localStorage.getItem("jwtUserToken"))

  useEffect(() => {
    //data sent to the server with POST
    fetch(`${MAIN_URL}/skillOptions`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: localStorage.getItem("jwtUserToken")
      })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body)
        if (body.data.length != 0) {
          setSkillData(body.data);
        }
      });
    //data sent to the server with POST
    fetch(`${MAIN_URL}/getSkills`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: localStorage.getItem("jwtUserToken") })
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (body) {
        console.log(body)
        if (body.data.length != 0) {
          console.log(body.data)
          setGetSkill(body.data)
          setIsData(true);
        }
      });
  }, []);

  let option = []
  skillData.map(data => {
    option.push({ label: data.skill, value: data.skillId })
  })

  const updateSkill = () => {
    handleSkills(selectOption);
  };

  const deleteSkill = (id) => {
    var data = id
    fetch(`${MAIN_URL}/deleteSkill`, {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data })
    }).then(res => res.json())
      .then(res => {
        setRoute(true)
      });

  }



  const updateField = value => {
    console.log(value);
    console.log(selectOption);
    setNo(no + 1)

    if (selectOption === null) {
      console.log("if");
      setShowStage(false);
      setDisable(false);
      setSelectOption([]);
    } else if (selectOption.length === 0) {
      console.log("else if");
      setShowStage(true);
      setDisable(true);
      setSelectOption(value);
    } else {
      console.log("else");
      if (value === null) {
        setSelectOption([]);
      }
      if (value !== null) {
        if (
          selectOption.length !== value.length &&
          selectOption.length <= value.length &&
          value !== null
        ) {
          setShowStage(true);
          setDisable(true);
          setSelectOption(value);
        }
        if (selectOption.length >= value.length && value !== null) {
          setSelectOption(value);
        }
      } else {
        setSelectOption([]);
      }
    }

    selectOption !== null
      ? updateScreen(true) && setSelectOption(value)
      : updateScreen(false) && setSelectOption([]);
  };
  const handleChange = () => {
    selectOption != null ? setJobProbabilty(true) : setJobProbabilty(false);
  };
  const handleOptionChange = e => {
    let j = selectOption.map(key => {
      return key.label;
    });

    console.log(j);

    for (var i = 0; i < selectOption.length; i++) {
      const count = selectOption.length;
      if (selectOption[i].label === j[i]) {
        selectOption[count - 1].stage = e.target.value;
        break;
      }
    }
    setShowStage(false);
    setDisable(false);
  };

  return (
    <div>
      <Navigator />
      <UserSteps />
      <div>
        {
          route === true
            ?
            (window.location.href = "/jobProbability") : null
        }
        <div className="jobProbability">
          <div className="row mainProbability">
            <div className="col-md-4">
              <div className="trendingJobListProbability"></div>
            </div>
            <div className="col-md-4">
              <div className="trendingJobListProbability2">
                <div className="addingSkills">
                  <div className="skills">
                    <Select
                      class="skillSelection"
                      onChange={updateField}
                      options={option}
                      isMulti
                      isDisabled={disable}
                      placeholder="Please Select Skill"
                    ></Select>
                    {showStage === true && selectOption != null ? (
                      <div className="radioButton">
                        <button
                          className="btn inputUserButton3"
                          name="stage"
                          value="Expert"
                          onClick={handleOptionChange}
                        />
                        Expert
                      <button
                          className="btn inputUserButton4"
                          name="stage"
                          value="Intermediate"
                          onClick={handleOptionChange}
                        />
                        Intermediate
                      <button
                          className="btn inputUserButton5"
                          name="stage"
                          value="Beginer"
                          onClick={handleOptionChange}
                        />
                        Beginner
                    </div>
                    ) : null}
                  </div>
                  {/* <div>
                    {
                      localStorage.getItem("jobId") && getSkill != null ?
                        <button
                          className="btn findJobBtn"
                          type="submit"
                          onClick={() => jobApply(localStorage.getItem("jobId"), window.location.href = "/post")}
                        >
                          Apply
                    </button>
                        :

                        ""
                    }
                  </div> */}
                  <div
                    className="firstSkill"
                    style={{
                      display: jobProbability === false ? "block" : "none"
                    }}
                  ></div>
                  <div
                    className="percentage"
                    style={{
                      display: jobProbability === false ? "none" : "block"
                    }}
                  ></div>
                  {jobProbability === true && setscreen === true ? (
                    <div>
                      {
                        localStorage.getItem("jobId") ?
                          <button
                            className="btn findJobBtn"
                            type="submit"
                            onClick={() => jobApply(localStorage.getItem("jobId"), window.location.href = "/post")}
                          >
                            Apply
                    </button>
                          :



                          <button
                            className="btn findJobBtn"
                            type="submit"
                            onClick={updateSkill}
                          >
                            Find Job
                    </button>
                      }
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            {isData === true && setscreen !== true ? (
              <div className="col-md-4 trendingList2">
                <div className="trendingJobListProbability">
                  <div className="job_skills">
                    <div className="skills-header">
                      <h6 className="Text_skills">Skills</h6>
                    </div>
                    {getSkill != null
                      ? getSkill.map((data, i) => {
                        return (
                          <div className="addedSkill" key={i}>
                            <ul className="skillText" key={i}>
                              <img src={require('../../../../src/images/deleteIcon.png')} width="30"
                                onClick={(() => deleteSkill(data.skillId))}

                              ></img>
                              * {data.skill + " [" + data.skillLevel + "]"}

                            </ul>

                          </div>
                        );
                      })
                      : ""}
                  </div>
                </div>

                {selectOption.length !== 0 && selectOption[no - 1].stage ? (
                  <div>
                    {setscreen === true ? (
                      <button
                        className="btn inputUserButton1"
                        type="submit"
                        onClick={handleChange}
                      >
                        Job Probability
                    </button>
                    ) : null}
                  </div>
                ) : null}
                <div className="eligible">
                  <img
                    src={require("../../../images/Check Your %-LevelHOW MUCH YOU ARE ELIGIBLE FOR TRENDING JOBS.png")}
                    className="eligible_2"
                  ></img>
                </div>
              </div>
            ) : null}
            {setscreen === true ? (
              <div className="col-md-4 trendingList2">
                <div className="trendingJobListProbability">
                  <div className="job_skills">
                    <div className="skills-header">
                      <h6 className="Text_skills">Skill</h6>
                    </div>
                    {selectOption != null
                      ? selectOption.map((data, i) => {
                        return (
                          <div className="addedSkill" key={i}>
                            <ul className="skillText" key={i}>
                              * {data.label}{" "}
                              {data.stage ? "[" + data.stage + "]" : ""}

                            </ul>
                          </div>
                        );
                      })
                      : ""}
                  </div>
                </div>

                {selectOption.length !== 0 && selectOption[no - 1].stage ? (
                  <div>
                    {setscreen === true ? (
                      <button
                        className="btn inputUserButton1"
                        type="submit"
                        onClick={handleChange}
                      >
                        Job Probability
                    </button>
                    ) : null}
                  </div>
                ) : null}
                <div className="eligible">
                  <img
                    src={require("../../../images/Check Your %-LevelHOW MUCH YOU ARE ELIGIBLE FOR TRENDING JOBS.png")}
                    className="eligible_2"
                  ></img>
                </div>
              </div>
            ) : null}
            {setscreen === true ? (
              <div
                className="col-md-4 trendingList"
                style={{ marginTop: "-82px" }}
              >
                <div className="trendingJobListProbability">
                  <TrendingJobList />
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
export default JobProbability;
