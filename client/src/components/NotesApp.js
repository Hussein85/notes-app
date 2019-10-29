import React, { Component } from "react";
import Sidebar from "./Sidebar";
import NoteList from "./NoteList";
import NoteDetail from "./NoteDetail";
import { connect } from "react-redux";

class NotesApp extends Component {
  render() {
    return (
      <div className="backgroundImage px-56 py-20 xl:px-24 xl:py-12 h-screen ">
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
  {}
)(NotesApp);
