import React, { Component } from "react";
import axios from "axios";
import {
  resetSelectedNoteProperties,
  editNote,
  setMode,
  addNote,
  editSelectedNote
} from "../actions";
import { ADD_MODE, VIEW_MODE, EDIT_MODE } from "../actions/types";

import { connect } from "react-redux";
import "./css/NoteDetail.css";
import NoteDetailButtons from "./NoteDetailButtons";

class NoteDetail extends Component {
  componentDidMount() {
    if (this.props.mode === ADD_MODE) {
      this.props.resetSelectedNoteProperties();
    }
  }

  onSave = () => {
    const mode = this.props.mode;
    this.props.setMode(VIEW_MODE);

    if (mode === ADD_MODE) {
      this.props.addNote(this.props.selectedNote);
    }

    if (mode === EDIT_MODE) {
      this.props.editNote(this.props.selectedNote);
    }
  };

  onTitleChange = e => {
    this.props.editSelectedNote("title", e.target.value);
  };

  onBodyChange = e => {
    this.props.editSelectedNote("body", e.target.value);
  };

  renderNoteDetail() {
    const mode = this.props.mode;
    if (mode === VIEW_MODE) {
      return (
        <div>
          <div className="tracking-wider text-custom-blue font-bold text-2xl">
            {this.props.selectedNote.title}
          </div>
          <p
            style={{ whiteSpace: "pre-wrap" }}
            className="text-sm font-medium text-gray-600 mt-4"
          >
            {this.props.selectedNote.body}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={() => {
              this.onSave();
            }}
            className="float-right btn bg-orange-500 text-white"
          >
            Save
          </button>
          <div>
            <input
              autoFocus
              className="focus:outline-none font-bold text-2xl text-custom-blue tracking-wider"
              placeholder="Enter a title"
              type="text"
              onChange={this.onTitleChange}
              value={this.props.selectedNote.title}
            />
          </div>
          <p className="mt-4">
            <textarea
              className="w-full h-64 textArea focus:outline-none text-sm font-medium text-gray-600"
              placeholder="Enter description for the note"
              type="text"
              onChange={this.onBodyChange}
              value={this.props.selectedNote.body}
            />
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="relative bg-white flex-auto flex flex-col px-16 pt-10 justify-between">
        <div className="absolute right-0 top-0 mt-4 mr-8">
          <i className="mr-2 far fa-user"></i>
          <span className="font-bold ">Hussein</span>
          <a href="/api/logout">
            <i className="ml-4 fas fa-sign-out-alt"></i>
          </a>
        </div>

        {this.renderNoteDetail()}

        <NoteDetailButtons />
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
    resetSelectedNoteProperties,
    setMode,
    editNote,
    addNote,
    editSelectedNote
  }
)(NoteDetail);
