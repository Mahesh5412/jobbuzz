/*
 * Purpose : This page is for Skill Services Api
 * Devlopers : Sai,Sethu,Neha
 */

import { MAIN_URL } from "../config/employeeConfig"; //MAIN_URL



//fetching Skills data
export const handleSkills = selectOption => {
  fetch(`${MAIN_URL}/skills`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      selectOption,
      userId: localStorage.getItem("jwtUserToken")
    })
  })
    .then(response => response.json())//getting json response
    .then(responseJson => {
      console.log(responseJson);
      if (responseJson.status === "success") {
         window.location.href = "/trending";
      }
      if (responseJson.status === "failure") {
        console.log(responseJson.result);
      }
    })
    .catch(error => {
      console.error(error);
    });
};
