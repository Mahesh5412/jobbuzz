import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import 'bootstrap/dist/css/bootstrap.css';
import {MAIN_URL} from '../config/employerConfig';


export const handledetails = (data) => {
    console.log(data)

   
const redirectTocompanyDetailssuccess = () => {
    Swal.fire({
        title: 'JobBuzz',
        text: "Data updated Succesfully!",
        type: 'success',
        allowOutsideClick: false,
        confirmButtonText: 'ok!'
      }).then((result) => {
        if (result.value) {
            window.location.href = "/postjob";
        }
      })

  }

  const redirectTocompanyDetailsfailure = () => {
    Swal.fire({
    title: 'JobBuzz',
    text: "User profile updated successfully!",
    type: 'warning',
    allowOutsideClick: false,
    confirmButtonText: 'ok!'
  }).then((result) => {
    if (result.value) {
        window.location.href = "/platform";
    }
  })
  }
console.log()
    fetch(`${MAIN_URL}/companyDetails`,{  
        method : 'POST',
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          data
        })
      }).then((response) => response.json())
      .then((responseJson) => {
          console.log(responseJson.status)
        if(responseJson[0].status === "success"){
          console.log(responseJson.result);
          redirectTocompanyDetailssuccess()
        }
        if(responseJson[0].status === "failure"){
          console.log(responseJson.result);
          redirectTocompanyDetailsfailure();
        }
      }).catch((error) => {
        console.error(error);
      });
      
}

