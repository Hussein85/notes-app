import React, { Component } from "react";
import {
  setSelectedNote,
  updateTitle,
  updateBody,
  resetSelectedNoteProperties
} from "../actions";
import { ADD_MODE, VIEW_MODE } from "../actions/types";

import { connect } from "react-redux";
import "./css/NoteDetail.css";
import NoteDetailButtons from "./NoteDetailButtons";

class NoteDetail extends Component {
  componentDidMount() {
    if (this.props.mode === ADD_MODE) {
      this.props.resetSelectedNoteProperties();
    }
  }

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
        <div>
          <div className="tracking-wider text-green-500 font-bold text-2xl">
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
          <div>
            <input
              autoFocus
              className="focus:outline-none font-bold text-2xl text-green-500 tracking-wider"
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
      <div className="bg-white flex-auto flex flex-col px-16 pt-24 justify-between">
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
  { setSelectedNote, updateTitle, updateBody, resetSelectedNoteProperties }
)(NoteDetail);
