import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/Login.css";

class Signup extends Component {
  render() {
    return (
      <div className="w-screen h-screen backgroundImage">
        <div className="opacity-75 background-gradient opacityBlur h-full w-full"></div>
        <div className="login-card">
          <h1>Sign up</h1>
          <br />
          <form action="/api/signup" method="post">
            <input type="text" name="name" placeholder="Your name" />
            <input type="text" name="username" placeholder="Username" />
            <input type="password" name="password" placeholder="Password" />
            <input
              type="submit"
              className="login login-submit"
              value="Sign up"
            />
          </form>
          <div className="login-help">
            Already have an account? <a href="/">Login</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {}
)(Signup);
