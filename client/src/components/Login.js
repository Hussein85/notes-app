import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/Login.css";

class SearchBar extends Component {
  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
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
    );
  }
}

export default connect(
  null,
  {}
)(SearchBar);
