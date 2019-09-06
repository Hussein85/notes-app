import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// import components
import Header from "./Header";
import NoteList from "./NoteList";
import Sidebar from "./Sidebar";

import Image from "../img/background.jpg";

const styles = {
  container: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};

class App extends Component {
  render() {
    return (
      <div
        className="bg-image bg-gray-100 py-16 px-24"
        style={styles.container}
      >
        {/* Container */}
        <div className="flex overflow-hidden shadow-xl min-h-screen rounded-lg">
          {/* 
          <div className="container">
          <BrowserRouter>
          <div>
          <Header />
          <Route exact path="/" component={NoteList} />
          </div>
          </BrowserRouter>
          </div>
          */}

          <Sidebar />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
