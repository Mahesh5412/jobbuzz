//Login reducer Page

const loginReducer = (state = [], action) => {
  switch (action.type) {
    case "userLogin":
      return (state = action.state);
    default:
      return state;
  }
};

export default loginReducer;
