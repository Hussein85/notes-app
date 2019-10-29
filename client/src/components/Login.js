import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/Login.css";

class Login extends Component {
  render() {
    return (
      <div className="w-screen h-screen backgroundImage">
        <div className="opacity-75 background-gradient opacityBlur h-full w-full"></div>
        <div className="login-card">
          <h1>Log-in</h1>
          <br />
          <form action="/login" method="post">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" className="login login-submit" value="login" />
          </form>

          <div className="login-help">
            <a href="#">Register</a> • <a href="#">Forgot Password</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Login);
