

import {MAIN_URL} from '../config/employerConfig';


export const handleAccept = (userData,jobData) => {
console.log(userData)
console.log(jobData)
 

    fetch(`${MAIN_URL}/acceptDetails`,{
        method : 'POST',
        headers : {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify({
            userData,
            jobData,
            jobStatus:"applied"
        })
      }).then((response) => response.json())
        .then((responseJson) => {
          if(responseJson.result === "success"){
           
          }
          if(responseJson.result === "failure"){
            console.log(responseJson.result);
            
          }
        }).catch((error) => {
          console.error(error);
        });


}
