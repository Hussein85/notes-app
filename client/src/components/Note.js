import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectedNote, setMode } from "../actions";
import { VIEW_MODE } from "../actions/types";
import "./css/Note.css";

class Note extends Component {
  onTitleClick = e => {
    this.props.setSelectedNote(this.props.note);
    this.props.setMode(VIEW_MODE);
  };

  render() {
    const note = this.props.note;
    const selectedNote = this.props.selectedNote;
    const date = note.updated_at;
    const current_dateTime = new Date(date);
    const formated_dateTime = current_dateTime.toLocaleDateString();

    return (
      <div>
        <div
          onClick={this.onTitleClick}
          className={
            "p-4 cursor-pointer " +
            (selectedNote.body === note.body ? "bg-custom-selectedBlue" : "")
          }
        >
          <div className="flex justify-between">
            <div
              className={
                "noteTitle focus:outline-none " +
                (selectedNote.body === note.body ? "selectedNote" : "")
              }
            >
              {note.title}
            </div>
            <div className="noteDate">{formated_dateTime}</div>
          </div>
          <p className="noteTruncatedBody">{note.body}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedNote: state.selectedNote
  };
}

export default connect(
  mapStateToProps,
  { setSelectedNote, setMode }
)(Note);
