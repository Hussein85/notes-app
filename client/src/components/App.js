import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// import components
import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";
import Login from "./Login";
import "./css/App.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    var bool = true;

    if (bool) {
      return (
        <div className="backgroundImage px-56 py-20 xl:px-24 xl:py-12 h-screen ">
          <div className="flex overflow-hidden shadow-xl h-full max-w-6xl mx-auto rounded-lg">
            <Sidebar />
            <NoteList />
            <NoteDetail />
          </div>
        </div>
      );
    } else {
      return <Login />;
    }
  }
}

export default connect(
  null,
  actions
)(App);
