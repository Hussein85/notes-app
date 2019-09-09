import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Note from "./Note";

import { connect } from "react-redux";
import { fetchNotes, addNote } from "../actions";
import "./css/NoteList.css";

class NoteList extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  addNote = note => {
    //this.props.addNote(note);
  };

  onSearchSubmit = term => {
    console.log("search term: ", term);
  };

  renderNoteList() {
    const { notes } = this.props;

    return (
      notes &&
      notes.map(note => {
        return <Note key={note._id} note={note} />;
      })
    );
  }

  onButtonClick = e => {
    this.props.setAddMode(true);
  };

  render() {
    return (
      <div>
        <div className="bg-green-100 flex w-64 flex-none min-h-screen flex-col justify-between">
          <div>
            <SearchBar onSubmit={this.onSearchSubmit} />

            <div className="flex flex-col overflow-y-auto">
              {this.renderNoteList()}
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <button onClick={this.onButtonClick} className="btn2 btn2-green">
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

function mapStateToProps({ notes }) {
  return { notes };
}

export default connect(
  mapStateToProps,
  { fetchNotes, addNote }
)(NoteList);
