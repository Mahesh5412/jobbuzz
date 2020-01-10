import Swal from 'sweetalert2/dist/sweetalert2.js';
import '../components/employee/Home/node_modules/sweetalert2/src/sweetalert2.scss';
import '../components/employee/Home/node_modules/bootstrap/dist/css/bootstrap.css';

import {MAIN_URL} from '../config/employerConfig';


export const handledetails = (userId,cname,cemail,cnumber,vertical) => {


  const redirect = () => {
   Swal.fire({
   title: 'JobBuzz',
   text: "submited details",
   type: 'success',
   allowOutsideClick: false,
   confirmButtonText: 'ok!'
 }).then((result) => {
   if (result.value) {
     redirectTodashboard()
   // For more information about handling dismissals please visit
   // https://sweetalert2.github.io/#handling-dismissals
   }
 })
 }
const redirectToplatform=()=>{
    window.location.href="/home"
}

  const redirectTodashboard = () => {
     window.location.href = "/postjob";
 }

    fetch(`${MAIN_URL}/companyDetails`,{
        method : 'POST',
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
          userId : userId,
          cname: cname,
          cemail: cemail,
          cnumber: cnumber,
          vertical: vertical,
        })
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.result === "success"){
            redirect()
          }
          if(responseJson.result === "failure"){
            console.log(responseJson.result);
            redirectToplatform();
          }
        }).catch((error) => {
          console.error(error);
        });


}
