import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Note from "./Note";

import { connect } from "react-redux";
import { setMode, setSelectedNote } from "../actions";
import { ADD_MODE } from "../actions/types";

import "./css/NoteList.css";

class NoteList extends Component {
  onSearchSubmit = term => {
    console.log("search term: ", term);
  };

  getVisibleNotes(notes) {
    // TODO: Implement visibilty filters
    //const visibilityFilter = // get from store

    // sort notes

    return notes.sort((a, b) => {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    //return notes.sort((a, b) => (a.updated_At > b.updated_At ? 1 : -1));
  }

  renderNoteList() {
    const { notes } = this.props;
    const visibleNotes = this.getVisibleNotes(notes);

    return (
      visibleNotes &&
      visibleNotes.map(note => {
        return <Note key={note._id} note={note} />;
      })
    );
  }

  onAddButtonClick = e => {
    this.props.setMode(ADD_MODE);
    this.props.setSelectedNote({ title: "", body: "" });
  };

  render() {
    return (
      <div>
        <div className="bg-green-100 flex w-64 min-h-screen flex-col justify-between">
          <div>
            <SearchBar onSubmit={this.onSearchSubmit} />

            <div className="flex flex-col overflow-y-auto">
              {this.renderNoteList()}
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <button onClick={this.onAddButtonClick} className="btn2 btn2-green">
              Add a note
            </button>
          </div>
        </div>

        {/* 
        <div className="addNote">
          <AddNote addNote={this.addNote} />
        </div>
        <div className={notes.length > 0 ? "collection" : "hidden"}>
          {this.renderNoteList()}
        </div>
        */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

export default connect(
  mapStateToProps,
  { setMode, setSelectedNote }
)(NoteList);
