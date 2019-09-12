import React, { Component } from "react";
import { addNote, editNote, setMode, setSelectedNote } from "../actions";
import { ADD_MODE, VIEW_MODE, EDIT_MODE } from "../actions/types";

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

  render() {
    const mode = this.props.mode;
    return (
      <div className="ml-4 flex mb-12 justify-end">
        <button className="focus:outline-none">
          <i className="ml-4 far fa-star text-gray-700 hover:text-green-400"></i>
        </button>
        <button className="focus:outline-none">
          <i className="ml-4 far fa-folder text-gray-700 hover:text-green-400"></i>
        </button>
        <button onClick={this.onEdit} className="focus:outline-none">
          <i className="ml-4 fas fa-pen text-gray-700 hover:text-green-400"></i>
        </button>
        <button className="focus:outline-none">
          <i className="ml-4 far fa-trash-alt text-gray-700 hover:text-green-400"></i>
        </button>
        <button
          onClick={this.onConfirm}
          style={{
            display: mode === VIEW_MODE ? "none" : ""
          }}
          className="focus:outline-none"
        >
          <i className="ml-4 far fa-check-circle text-gray-700 hover:text-green-400"></i>
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
  { addNote, editNote, setMode, setSelectedNote }
)(NoteDetailButtons);
