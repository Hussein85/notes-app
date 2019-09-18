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
import { EDIT_MODE, SHOW_DELETED } from "../actions/types";
import "./css/NoteDetailButtons.css";

import { connect } from "react-redux";

class NoteDetailButtons extends Component {
  onDeleteRestore = () => {
    this.props.selectedNote.deleted_at = null;
    this.props.updateSelectedNote(this.props.selectedNote);
  };

  onEdit = () => {
    this.props.setMode(EDIT_MODE);
  };

  onDelete = () => {
    const visibilityFilter = this.props.visibilityFilter;

    if (visibilityFilter === SHOW_DELETED) {
      this.props.deleteNote(this.props.selectedNote._id);
    } else {
      this.props.selectedNote.deleted_at = new Date();
      this.props.updateSelectedNote(this.props.selectedNote);
    }
  };

  onArchieve = () => {
    if (this.props.selectedNote.archieved_at == null) {
      this.props.selectedNote.archieved_at = new Date();
    } else {
      this.props.selectedNote.archieved_at = null;
    }

    this.props.updateSelectedNote(this.props.selectedNote);
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
    const visibilityFilter = this.props.visibilityFilter;
    return (
      <div
        className={
          "ml-4 flex mb-8 justify-end " +
          (Object.keys(this.props.selectedNote).length === 0 ? "hidden" : "")
        }
      >
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
          onClick={this.onDeleteRestore}
          style={{
            display: visibilityFilter === SHOW_DELETED ? "" : "none"
          }}
          className="focus:outline-none"
        >
          <i className="ml-4 fas fa-trash-restore text-gray-700 hover:text-green-400"></i>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedNote: state.selectedNote,
    mode: state.mode,
    visibilityFilter: state.visibilityFilter
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
