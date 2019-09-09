import React, { Component } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

// import components
//import Header from "./Header";
import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";

import Image from "../img/background.jpg";

const styles = {
  container: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};

class App extends Component {
  state = {
    selectedNote: {
      title: "Title 1",
      created_at: "2019-08-27",
      updated_at: "2019-08-27",
      deleted_at: "",
      starred: false,
      body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.`
    },
    addMode: false
  };

  setAddMode = mode => {
    this.setState({ addMode: mode });
  };

  render() {
    const selectedNote = this.state.selectedNote;
    return (
      <div
        className="bg-image bg-gray-100 py-16 px-24"
        style={styles.container}
      >
        {/* Container */}
        <div className="flex overflow-hidden shadow-xl min-h-screen rounded-lg">
          <Sidebar />
          <NoteList setAddMode={this.setAddMode} />
          <NoteDetail note={selectedNote} addMode={this.state.addMode} />
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
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
