/*
 * Purpose : This page is for home
 * Devlopers :
 */
import React, { useState } from "react";

//Bootstrap for adding styles
import "bootstrap/dist/css/bootstrap.css";
import "../Dashboard/App.css";

import Navigator from "../../Navigation/navigation";

// React Card Flip is allows you to use the card flipping animation

import ReactCardFlip from "react-card-flip";
import "sweetalert2/src/sweetalert2.scss";

import { useSelector, useDispatch } from "react-redux";

//importing front, back, register, login for action
import { front, back, register, login } from "../../../actions";

// Register,Login api callings
import { handleRegister } from "../../../services/auth/userRegister";
import handleLogin from "../../../services/auth/userLogin";

import loginSideLogo from "../../../images/login.png";
import useForm from "./validate";

//Home component
function Home() {
  const stateSchema = {
    name: { value: "", error: "" },
    mobile: { value: "", error: "" },
    email: { value: "", error: "" },
    password: { value: "", error: "" },
    cpassword: { value: "", error: "" }
  };

  const flip = useSelector(state => state.flip);
  const dispatcher = useDispatch();

  const [form, setValues] = useState({
    name: "",
    password: "",
    cpassword: "",
    mobile: "",
    email: ""
  });

  const printRegisterValues = e => {
    e.preventDefault();
    dispatcher(register(form));
    handleRegister(
      form.name,
      form.email,
      form.mobile,
      form.password,
      form.cpassword
    );
  };

  const updateField = e => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const printLoginValues = e => {
    e.preventDefault();
    dispatcher(login(form));
    handleLogin(form.name, form.password);
  };

  const validationStateSchema = {
    name: {
      validator: {
        regEx: /^[a-zA-Z]+[a-zA-Z]+$/,
        error: "Invalid name format."
      }
    },

    mobile: {
      validator: {
        regEx: /^[0-9]+$/,
        error: "Invalid mobile format."
      }
    },
    email: {
      validator: {
        regEx: /^[a-zA-Z]+[@]+[[gmail.com]+$/,
        error: "Invalid email format."
      }
    },
    password: {
      validator: {
        regEx: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        error: "Invalid password format."
      }
    },
    cpassword: {
      validator: {
        regEx: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
        error: "Invalid password format."
      }
    }
  };

  function onSubmitForm(state) {
    alert(JSON.stringify(state, null, 2));
  }

  const { state, handleOnChange, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmitForm
  );

  const errorStyle = {
    color: "red",
    fontSize: "13px",
    paddingLeft: 70
  };

  return (
    <div className="">
      <Navigator />
      <div className="mainContainer">
        <div className="mainLoginRegister">
          <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div key="front" className="register">
              <div className="registerSide">
                <div className="createLogo">
                  <img
                    src={require("../../../images/jobbuzzlogo.png")}
                    width={250}
                    height={40}
                  />
                </div>
                <button
                  onClick={() => dispatcher(front())}
                  className="buttonHome"
                >
                  Login
                </button>
              </div>
              <div className="registerMain">
                <div className="registerName">CREATE ACCOUNT</div>
                <div className="col-6 inputRegister">
                  <form onSubmit={printRegisterValues} autoComplete="off">
                    <div className="inputRegisterField">
                      <label>
                        <input
                          className="form-control"
                          type="text"
                          value={form.name}
                          name="name"
                          onChange={updateField}
                          placeholder=""
                          required
                        />
                        <span className="spanClass">Enter Your Name</span>
                      </label>
                    </div>
                    <div className="inputRegisterField">
                      <label>
                        <input
                          className="form-control"
                          type="text"
                          value={form.mobile}
                          name="mobile"
                          onChange={updateField}
                          placeholder=""
                          required
                        />
                        <span className="spanClass">Enter Your Mobile</span>
                      </label>
                    </div>
                    <div className="inputRegisterField">
                      <label>
                        <input
                          className="form-control"
                          type="email"
                          value={form.email}
                          name="email"
                          onChange={updateField}
                          placeholder=""
                          required
                        />
                        <span className="spanClass">Enter Email</span>
                      </label>
                    </div>
                    <div className="inputRegisterField">
                      <label>
                        <input
                          className="form-control"
                          type="password"
                          value={form.password.value}
                          name="password"
                          onChange={(updateField, handleOnChange)}
                          placeholder=""
                          required
                        />
                        <span className="spanClass">Enter Password</span>
                      </label>
                    </div>
                    <div className="inputRegisterField">
                      <label>
                        <input
                          className="form-control"
                          type="password"
                          value={form.cpassword.value}
                          name="cpassword"
                          onChange={(updateField, handleOnChange)}
                          placeholder=""
                          required
                        />
                        <span className="spanClass">Confirm Password</span>
                      </label>
                    </div>

                    <div className="inputRegisterButton">
                      <button
                        className="buttonHomeSide"
                        type="submit"
                        disable={disable}
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div key="back" className="login">
              <div className="loginSide">
                <div className="createLogo">
                  <img
                    src={require("../../../images/jobbuzzlogo.png")}
                    width={250}
                    height={40}
                  />
                </div>
                <button
                  onClick={() => dispatcher(back())}
                  className="buttonHome"
                >
                  Register
                </button>
              </div>
              <div className="loginMain">
                <div className="loginName">SIGN IN TO JOBBUZZ</div>
                <div className="loginContent">
                  <div className="col-6 inputLogin">
                    <form onSubmit={printLoginValues} autoComplete="off">
                      <div className="inputLoginField">
                        <label>
                          <input
                            className="form-control"
                            type="text"
                            value={form.name}
                            name="name"
                            onChange={updateField}
                            placeholder=""
                            required
                          />
                          <span className="spanClass">
                            Enter Your Mobile/Email
                          </span>
                        </label>
                        {state.email.error && (
                          <p style={errorStyle}>{state.email.error}</p>
                        )}
                      </div>
                      <div className="inputLoginField">
                        <label>
                          <input
                            className="form-control"
                            type="password"
                            value={form.password.value}
                            name="password"
                            onChange={(updateField, handleOnChange)}
                            placeholder=""
                            required
                          />
                          <span className="spanClass">Enter Password</span>
                        </label>
                        {state.password.error && (
                          <p style={errorStyle}>{state.password.error}</p>
                        )}
                      </div>
                      <div className="inputLoginFieldButton">
                        <button className="buttonHomeSide" type="submit">
                          Login
                        </button>
                      </div>
                      <div className="loginSideLogo">
                        <img src={loginSideLogo} width="180" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>
    </div>
  );
}

export default Home;
