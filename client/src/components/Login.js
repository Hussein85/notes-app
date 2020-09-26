import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/Login.css";

class Login extends Component {
  render() {
    let t = 1;
    return (
      <div className="w-screen h-screen backgroundImage">
        <div className="opacity-75 background-gradient opacityBlur h-full w-full"></div>
        <div className="login-card">
          <h1>Log-in</h1>
          <br />
          <form action="/api/login" method="post">
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input type="submit" className="login login-submit" value="Login" />
          </form>

          <div className="login-help">
            Don't have an account? <a href="/signup">Signup</a>
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
