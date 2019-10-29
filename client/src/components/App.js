import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// import components
import NotesApp from "./NotesApp";
import Login from "./Login";
import "./css/App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login} />
          <Route exact path="/notesApp" component={NotesApp} />
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  null,
  actions
)(App);
