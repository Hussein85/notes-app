import React, { Component } from "react";
import { deleteNote, editNote } from "../actions";
import { connect } from "react-redux";
import "./css/Note.css";

class Note extends Component {
  state = {
    editing: false,
    editText: this.props.note.content
  };

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
      updatedNote.content = this.state.editText;
      this.props.editNote(updatedNote);
    }
  };

  render() {
    const note = this.props.note;

    let viewStyle = {};
    let editStyle = {};

    if (this.state.editing) {
      viewStyle.display = "none";
    } else {
      editStyle.display = "none";
    }

    return (
      <div className="collection-item">
        <p style={viewStyle}>
          <span className="noteTitle">{note.content}</span>
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
    );
  }
}

export default connect(
  null,
  { deleteNote, editNote }
)(Note);
