import React, { Component } from "react";
//import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
//import { VisibilityFilters } from "../actions";

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
  /*
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
    addMode: false,
    visibilityFilter: "SHOW_ALL"
  };
  */

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div
        className="bg-image bg-gray-100 py-16 px-24"
        style={styles.container}
      >
        {/* Container */}
        <div className="flex overflow-hidden shadow-xl min-h-screen rounded-lg">
          <Sidebar />
          <NoteList />
          <NoteDetail />
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

/*
getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};
*/

//function mapStateToProps({ selectedNote, notes }) {
//  return { selectedNote, notes };
//}

// Same as above
//function mapStateToProps(state) {
//  return { selectedNote: state.selectedNote };
//}

export default connect(
  null,
  actions
)(App);
