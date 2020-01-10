const cdetailsReducer = (state= [],action)=>{
    switch (action.type) {
      case 'Details':
        return  state = action.state;
      default:
        return state
    }
  }
  
  export default cdetailsReducer;
  