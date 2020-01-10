//RegisterReducer Page

const registerReducer = (state = [], action) => {
  switch (action.type) {
    case "userRegister":
      return (state = action.state);
    default:
      return state;
  }
};

export default registerReducer;
