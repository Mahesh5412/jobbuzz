/*
 * Purpose : This page is for Login Services Api
 * Devlopers : Sai,Sethu,Neha
 */
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import { MAIN_URL } from "../config/authConfig";
export const handleLogin = (name, password) => {
  const redirectToUserHome = () => {
    window.location.href = "/jobGuide";
    //    return (<Redirect to="/userHome"/>);
  };

  const redirectToPlatform = () => {
    window.location.href = "/platform";
    //    return (<Redirect to="/userHome"/>);
  };

  //fetching userLogin data
  fetch(`${MAIN_URL}/userLogin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },

    body: JSON.stringify({ name: name, password: password })
  })
    .then(response => response.json())
    .then(responseJson => {
      if (responseJson.result === "success") {
        console.log(responseJson);
        if (responseJson.data.role == "employee") {
          const mobileToken = responseJson.data.mobileNumber;
          const emailToken = responseJson.data.email;
          const userId = responseJson.data.userId;
          localStorage.setItem("jwtMobileToken", mobileToken);
          localStorage.setItem("jwtEmailToken", emailToken);
          localStorage.setItem("jwtUserToken", userId);
          localStorage.setItem("role", "employee");
          localStorage.setItem("isLogged", true);
          redirectToUserHome();
        }
        if (responseJson.data.role == "employer") {
          const mobile = responseJson.data.mobileNumber;
          const userId = responseJson.data.userId;
          localStorage.setItem("Mobile", mobile);
          localStorage.setItem("UserId", userId);
          localStorage.setItem("isLogged", true);
          localStorage.setItem("role", "employer");
          redirectToPlatform();
        }
      }

      if (responseJson.result === "failure") {
        Swal.fire({
          title: "JobBuzz",
          text: "Username or Password is invalid!",
          type: "warning",
          allowOutsideClick: false,
          confirmButtonText: "ok!"
        }).then(result => {
          if (result.value) {
            // For more information about handling dismissals please visit
            // https://sweetalert2.github.io/#handling-dismissals
          }
        });
      }
    })
    .catch(error => {
      console.error(error);
    });
};

export default handleLogin;
