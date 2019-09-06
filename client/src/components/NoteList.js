import React, { Component } from "react";
import AddNote from "./AddNote";
import Note from "./Note";

import { connect } from "react-redux";
import { fetchNotes, addNote } from "../actions";
import "./css/NoteList.css";

class NoteList extends Component {
  state = {
    editing: false
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

  addNote = note => {
    this.props.addNote(note);
  };

  renderNoteList() {
    const { notes } = this.props;

    let viewStyle = {};
    let editStyle = {};

    if (this.state.editing) {
      viewStyle.display = "none";
    } else {
      editStyle.display = "none";
    }

    return (
      notes &&
      notes.map(note => {
        return <Note key={note._id} note={note} />;
      })
    );
  }

  render() {
    const { notes } = this.props;
    return (
      <div>
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
