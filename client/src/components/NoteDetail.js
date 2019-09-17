import React, { Component } from "react";
import {
  setSelectedNote,
  updateTitle,
  updateBody,
  resetSelectedNoteProperties,
  editNote,
  setMode,
  addNote
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
    this.props.updateTitle(e.target.value);
  };

  onBodyChange = e => {
    this.props.updateBody(e.target.value);
  };

  renderNoteDetail() {
    const mode = this.props.mode;
    if (mode === VIEW_MODE) {
      return (
        <div className>
          <div className="tracking-wider text-custom-blue font-bold text-2xl">
            {this.props.selectedNote.title}
          </div>
          <p className="text-sm font-medium text-gray-600 mt-4">
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
      <div className="bg-white flex-auto flex flex-col px-16 pt-10 justify-between">
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
    setSelectedNote,
    updateTitle,
    updateBody,
    resetSelectedNoteProperties,
    setMode,
    editNote,
    addNote
  }
)(NoteDetail);
