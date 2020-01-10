/*
 * Purpose : This page is for userRegistraion Services Api
 * Devlopers : Sai,Sethu,Neha
 */
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { MAIN_URL } from "../config/authConfig";

export const handleRegister = (name,email,mobile,password,cpassword,key) => {

  const redirect = () => {
   Swal.fire({
   title: 'JobBuzz',
   text: "Registration Completed Succesfully Please Login!",
   type: 'success',
   allowOutsideClick: false,
   confirmButtonText: 'ok!'
 }).then((result) => {
   if (result.value) {
     redirectToLogin()
   // For more information about handling dismissals please visit
   // https://sweetalert2.github.io/#handling-dismissals
   }
 })
 }
  const redirectToRegister = () => {
   Swal.fire({
   title: 'JobBuzz',
   text: "User Already Existed please Try Another!",
   type: 'warning',
   allowOutsideClick: false,
   confirmButtonText: 'ok!'
 }).then((result) => {
   if (result.value) {
   // For more information about handling dismissals please visit
   // https://sweetalert2.github.io/#handling-dismissals
   }
 })
 }

 //redirect to login Page
  const redirectToLogin = () => {
     window.location.href = "/home";
 }

//check if password and cpassword are Matching or not
    if(password === cpassword){

    fetch(`${MAIN_URL}/userRegister`,{
        method : 'POST',
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          name: name,
          password: password,
          email: email,
          mobile: mobile,
          type: key

        })
      }).then((response) => response.json())//getting json data
        .then((responseJson) => {
          if(responseJson.result === "success"){
            console.log(responseJson.result);
            redirect();
          }
          if(responseJson.result === "failure"){
            console.log(responseJson.result);
            redirectToRegister();
          }
        }).catch((error) => {
          console.error(error);
        });
}
else{
  Swal.fire({
  title: 'JobBuzz',
  text: "Both Passwords Should Match!",
  type: 'warning',
  allowOutsideClick: false,
  confirmButtonText: 'ok!'
}).then((result) => {
  if (result.value) {
  // For more information about handling dismissals please visit
  // https://sweetalert2.github.io/#handling-dismissals
  }
})
}
}
