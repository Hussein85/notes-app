import React, { Component } from "react";
import { connect } from "react-redux";
import { setSelectedNote, setMode } from "../actions";
import { VIEW_MODE } from "../actions/types";
import "./css/Note.css";

class Note extends Component {
  /*
  deleteNote = id => {
    this.props.deleteNote(id);
  };

  setEditText = text => {
    this.setState({ editText: text });
  };

  enableEditing = event => {
    this.setState({ editing: true });
  };

  handleEditingDone = event => {
    if (event.keyCode === 13) {
      this.setState({ editing: false });
      let updatedNote = this.props.note;
      updatedNote.body = this.state.editText;
      this.props.editNote(updatedNote);
    }
  };
  */

  onTitleClick = e => {
    this.props.setSelectedNote(this.props.note);
    this.props.setMode(VIEW_MODE);
  };

  render() {
    const note = this.props.note;
    const selectedNote = this.props.selectedNote;
    const date = note.updated_at;
    let current_dateTime = new Date(date);
    let formated_dateTime = current_dateTime.toLocaleDateString();

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

        {/*
      <div className="collection-item">
        <p style={viewStyle}>
          <span className="noteTitle">{note.body}</span>
          <button
            onClick={() => {
              this.deleteNote(note._id);
            }}
            className="btn-floating btn-small red right"
          >
            <i className="large material-icons">delete</i>
          </button>
          <button
            onClick={this.enableEditing}
            className="adjustButton btn-floating btn-small blue right"
          >
            <i className="large material-icons">mode_edit</i>
          </button>
        </p>
        <div style={editStyle}>
          <input
            onKeyDown={this.handleEditingDone.bind(this)}
            type="text"
            value={this.state.editText}
            onChange={e => {
              this.setEditText(e.target.value);
            }}
          />
        </div>
      </div>
          */}
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
