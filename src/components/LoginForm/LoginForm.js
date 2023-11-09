import React, { useState, useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { myContext } from "../Context/mycontext.js";
import { Redirect } from "react-router-dom";
import "./LoginForm.css";
import { API } from "../../Api/BankApi";

const LoginForm = ({ openLogin, closeAll }) => {
  // React States
  const [error, setError] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { login } = useContext(myContext);
  const [targetUrl, setTargetUrl] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const fetchUser = async (newLogin) => {
    let url = "";
    if (newLogin.email === "admin@admin.com") url = "users/";
    else url = "users/login";

    setTargetUrl(url);
    try {
      const { data } = await API.post(url, newLogin);
      if (data.token !== undefined) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("data", data.data.personal_id);
        setIsSubmitted(true);
      } else {
        setError(true);
        renderLoginError(data);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  // render login errors
  const renderLoginError = (data) => {
    if (data.includes("user")) {
      setErrorMessages({ name: "uname", message: errors.uname });
      renderErrorMessage("uname");
    } else if (data.includes("password")) {
      setErrorMessages({ name: "pass", message: errors.pass });
      renderErrorMessage("password");
    }
  };
  // input change
  const handleInputChange = ({ target }) => {
    console.log(target.value);
    const { name, value } = target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newLogin = {
      email: inputValues.email,
      password: inputValues.password,
    };
    await fetchUser(newLogin);
  };
  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  // close form
  const closeForm = () => {
    closeAll(false);
  };
  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>שם משתמש </label>
          <input
            type="text"
            name="email"
            onChange={handleInputChange}
            value={inputValues.email}
            className="login-form-input"
          />
          {error && errorMessages.name === "uname" && (
            <div style={{ color: "red" }}>{errorMessages.message}</div>
          )}
        </div>
        <div className="input-container">
          <label>סיסמא </label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={inputValues.password}
            className="login-form-input"
          />
          {error && errorMessages.name === "pass" && (
            <div style={{ color: "red" }}>{errorMessages.message}</div>
          )}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <>
      {login && (
        <div className="form-app">
          <div className="login-form">
            <button onClick={closeForm} className="form-close">
              <FaTimes />
            </button>
            <img
              className="login-pic"
              alt="login-pic"
              src="/assets/img/logo.png"
            />
            <div className="title">כניסה לחשבון שלי</div>
            {isSubmitted ? (
              <>
                <div>User is successfully logged in</div>
                <Redirect to={targetUrl} />
              </>
            ) : (
              renderForm
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
