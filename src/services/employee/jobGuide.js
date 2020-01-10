/*
 * Purpose : This page is for job Details Api
 * Devlopers : Sai,Sethu,Neha
 */

import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import 'bootstrap/dist/css/bootstrap.css';
import {MAIN_URL} from '../config/employeeConfig';

//function handling JobDetails
export const handleJobDetails = (data) => {
   
//if successfully updated redirect to JobProbability step
const redirectToJobguidesuccess = () => {
    Swal.fire({
        title: 'JobBuzz',
        text: "Data updated Succesfully!",
        type: 'success',
        allowOutsideClick: false,
        confirmButtonText: 'ok!'
      }).then((result) => {
        if (result.value) {
            window.location.href = "/JobProbability";
        }
      })

  }

  //In case of error redirect to Jobguide step
  const redirectTojobguidefailure = () => {
    Swal.fire({
    title: 'JobBuzz',
    text: "User profile updated successfully!",
    type: 'warning',
    allowOutsideClick: false,
    confirmButtonText: 'ok!'
  }).then((result) => {
    if (result.value) {
        window.location.href = "/Jobguide";
    }
  })
  }



  //fetching userDetails
    fetch(`${MAIN_URL}/userDetails`,{  
        method : 'POST',
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          data,
          userId: localStorage.getItem("jwtUserToken")
        })
      }).then((response) => response.json())//getting json response
      .then((responseJson) => {
          console.log(responseJson.status)
        if(responseJson[0].status === "success"){
          console.log(responseJson.result);
          redirectToJobguidesuccess() //redirect to redirectToJobguidesuccess
        }
        if(responseJson[0].status === "failure"){
          console.log(responseJson.result);
          redirectTojobguidefailure(); //redirect to redirectTojobguidefailure
        }
      }).catch((error) => {
        console.error(error);
      });
      
}

