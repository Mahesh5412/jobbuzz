/*
 * Purpose : This page is for jobApply Api
 * Devlopers : Sai,Sethu,Neha
 */

import { MAIN_URL } from '../config/employeeConfig';

/** Fetching data from JobApply */
export const jobApply = (jobId) => {

  const redirectToSuccess =() =>{
    window.location.href="/post"
  }

  fetch(`${MAIN_URL}/jobApply`,{
        method : 'POST',
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            userId: localStorage.getItem("jwtUserToken"),
            jobId,
            jobStatus:'waiting'
        })
      }).then((response) => response.json()) //getting data from json
        .then((responseJson) => {
          if(responseJson.result === "success"){
            console.log(responseJson.result);
            redirectToSuccess();
          }
          if(responseJson.result === "failure"){
            console.log(responseJson.result);
          
          }
        }).catch((error) => {
          console.error(error);
        });
}