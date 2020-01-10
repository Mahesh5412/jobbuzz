/*
 * Purpose : This page is for Company Details Api
 * Devlopers : Sai,Sethu,Neha
 */
import { MAIN_URL } from '../config/employeeConfig';    

export const jobDetails = () => {

    fetch(`${MAIN_URL}/companyDetails`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json()) // geting response from json
        .then((responseJson) => {
            console.log(responseJson) 
        }).catch((error) => {
            console.error(error);
        });
}