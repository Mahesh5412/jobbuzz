//Flip reducer Page


const flipReducer = (state = true, action) => {
  switch (action.type) {
    case "FRONT":
      return !state;
    case "BACK":
      return !state;
    default:
      return state;
  }
};
export default flipReducer;
