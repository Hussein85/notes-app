import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

// import components
import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";
import "./css/App.css";

import Image from "../img/img2.jpg";

const styles = {
  container: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  }
};

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div
        className="px-56 py-20 xl:px-24 xl:py-12 h-screen "
        style={styles.container}
      >
        <div className="flex overflow-hidden shadow-xl h-full max-w-6xl mx-auto rounded-lg">
          <Sidebar />
          <NoteList />
          <NoteDetail />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
