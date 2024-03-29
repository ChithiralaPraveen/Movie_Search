import React, { useState } from "react";
import { Navigate, Route } from 'react-router-dom';


import "./style.css";

function Login() {

  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "admin",
      password: "admin123"
    },
    {
      username: "user2",
      password: "pass2"
    },
    {
      username: "Praveen",
      password: "123"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
        localStorage.setItem('isLoggedIn', 'False');
        localStorage.setItem('Username', 'Guest');
      } else {
        setIsSubmitted(true);
        // To store user logged in or not
        localStorage.setItem('isLoggedIn', 'True');
        localStorage.setItem('Username', uname.value);
        <Route path="/MovieDashboard" element={<Navigate to="/error-page" />} />

      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
      localStorage.setItem('Username', 'Guest');
      localStorage.setItem('isLoggedIn', 'False');
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderSuccess = (
    <div>User is successfully logged in</div>
  )

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="Login">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? renderSuccess : renderForm}
      </div>
    </div>
  );
}

export default Login;