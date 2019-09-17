import React, { Component } from "react";
import {
  addNote,
  editNote,
  deleteNote,
  setMode,
  setSelectedNote,
  archiveNote,
  updateStarred,
  updateSelectedNote
} from "../actions";
import { ADD_MODE, VIEW_MODE, EDIT_MODE } from "../actions/types";
import "./css/NoteDetailButtons.css";

import { connect } from "react-redux";

class NoteDetailButtons extends Component {
  onConfirm = () => {
    const mode = this.props.mode;
    this.props.setMode(VIEW_MODE);

    if (mode === ADD_MODE) {
      this.props.addNote(this.props.selectedNote);
    }

    if (mode === EDIT_MODE) {
      this.props.editNote(this.props.selectedNote);
    }
  };

  onEdit = () => {
    this.props.setMode(EDIT_MODE);
  };

  onDelete = () => {
    this.props.deleteNote(this.props.selectedNote);
  };

  onArchieve = () => {
    console.log("inside archive", this.props.selectedNote.archieved_at);
    if (this.props.selectedNote.archieved_at == null) {
      console.log("inside if == null");
      this.props.selectedNote.archieved_at = new Date();
    } else {
      console.log("inside if != null");
      this.props.selectedNote.archieved_at = null;
    }

    console.log("before updatedfunction ", this.props.selectedNote);
    this.props.updateSelectedNote(this.props.selectedNote);

    //this.props.archiveNote(new Date());
    //this.props.editNote(this.props.selectedNote);
    /*
    console.log("archieved_at", this.props.selectedNote.archieved_at);
    if (this.props.selectedNote.archieved_at === null) {
      this.props.archiveNote(new Date());
      this.props.editNote(this.props.selectedNote);
      console.log("first if");
    } else {
      this.props.archiveNote(null);
      this.props.editNote(this.props.selectedNote);
      console.log("second if");
    }
    */
  };

  onStarred = () => {
    this.props.selectedNote.starred = this.props.selectedNote.starred === false;
    this.props.updateStarred(this.props.selectedNote.starred);
    this.props.editNote(this.props.selectedNote);
  };

  getClass = (property, trueClass, falseClass) => {
    return property ? trueClass : falseClass;
  };

  render() {
    const mode = this.props.mode;

    return (
      <div className="ml-4 flex mb-8 justify-end">
        <button
          onClick={() => {
            this.onStarred();
          }}
          className="focus:outline-none"
        >
          <i
            className={
              "ml-4 text-gray-700 hover:text-yellow-400 " +
              this.getClass(
                this.props.selectedNote.starred,
                "fas fa-star fa_star-yellow",
                "fas fa-star"
              )
            }
          ></i>
        </button>
        <button
          onClick={() => {
            this.onArchieve();
          }}
          className="focus:outline-none"
        >
          <i
            className={
              "ml-4 text-gray-700 hover:text-blue-500 " +
              (this.props.selectedNote.archieved_at === null
                ? "fas fa-folder"
                : "fas fa-folder fa_folder-blue")
            }
          ></i>
        </button>
        <button
          onClick={this.onEdit}
          style={{
            display: mode === EDIT_MODE ? "none" : ""
          }}
          className="focus:outline-none"
        >
          <i className="ml-4 fas fa-pen text-gray-700 hover:text-green-400"></i>
        </button>
        <button
          onClick={this.onDelete}
          style={{
            display: mode === EDIT_MODE ? "none" : ""
          }}
          className="focus:outline-none"
        >
          <i className="ml-4 fas fa-trash-alt text-gray-700 hover:text-red-600"></i>
        </button>
        <button
          onClick={this.onConfirm}
          style={{
            display: mode === VIEW_MODE ? "none" : ""
          }}
          className="focus:outline-none"
        >
          <i className="ml-4 fas fa-check-circle text-gray-700 hover:text-green-400"></i>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedNote: state.selectedNote,
    mode: state.mode
  };
}

export default connect(
  mapStateToProps,
  {
    addNote,
    editNote,
    deleteNote,
    setMode,
    setSelectedNote,
    archiveNote,
    updateStarred,
    updateSelectedNote
  }
)(NoteDetailButtons);
