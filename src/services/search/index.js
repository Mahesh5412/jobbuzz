/*
 * Purpose : This page is for Skill Services Api
 * Devlopers : Sai,Sethu,Neha
 */

 import { MAIN_URL } from "../config/searchConfig"; //MAIN_URL

//fetching Skills data
const  handleSearch  = (searchData,location) => {

    
    fetch(`${MAIN_URL}/getDetails`, {
         method: 'POST',
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
         },
         body: JSON.stringify({
            searchData,
            location
         })
     }).then((response) => response.json())//getting json response
         .then((responseJson) => {
         
             
            if (responseJson.status === "success") { 
                console.log(responseJson);
                const result = responseJson
                return result;

             }
             if (responseJson.status === "failure") {
                 console.log(responseJson);
                 return responseJson;
             }
         }).catch((error) => {
             console.error(error);
         });
};

export default handleSearch