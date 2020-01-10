
/**
 * purpose: page for exporting all the actions
 * Developer:  Narendra,Supriya,Rachana,Swathi
 */

//Flip actions
export const front = () =>{
  return {
    type: 'FRONT'
  };
}

export const back = () =>{
  return {
    type: 'BACK'
  };
}


//register-Login actions

export const register = (form) =>{
  return {
    type: 'userRegister',
    
    state: form
  };
}
export const login = (form) =>{
  return {
    type: 'userLogin',
    state: form
  };
}

export const cdetails = (details) =>{
  return {
    type: 'Details',
    state: details
  };
}