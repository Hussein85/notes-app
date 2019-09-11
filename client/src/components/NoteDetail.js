import React, { Component } from "react";
import { setSelectedNote } from "../actions";
import { ADD_MODE } from "../actions/types";

import { connect } from "react-redux";
import "./css/NoteDetail.css";
import NoteDetailButtons from "./NoteDetailButtons";

class NoteDetail extends Component {
  state = {
    title: "",
    body: "",
    starred: false
  };

  onTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  onBodyChange = e => {
    this.setState({
      body: e.target.value
    });
  };

  resetInputs = () => {};

  renderNoteDetail() {
    const mode = this.props.mode;
    const note = this.props.selectedNote;

    console.log("note: ", note);

    if (mode == ADD_MODE) {
      return (
        <div>
          <div className="focus:outline-none tracking-wider text-green-500 font-bold text-2xl">
            <input
              className="focus:outline-none"
              placeholder="Enter a title"
              type="text"
              onChange={this.onTitleChange}
              value={this.state.title}
            />
          </div>
          <p className=" text-sm font-medium text-gray-600 mt-4">
            <textarea
              className="w-full h-64 textArea focus:outline-none"
              placeholder="Enter description for the note"
              type="text"
              onChange={this.onBodyChange}
              value={this.state.body}
            />
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <div className="tracking-wider text-green-500 font-bold text-2xl">
            {note.title}
          </div>
          <p className="text-sm font-medium text-gray-600 mt-4">{note.body}</p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="bg-white flex-auto flex flex-col px-16 pt-24 justify-between">
        {this.renderNoteDetail()}

        <NoteDetailButtons note={this.state} />
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
  { setSelectedNote }
)(NoteDetail);
