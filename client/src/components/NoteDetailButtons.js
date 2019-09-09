import React, { Component } from "react";
import { addNote } from "../actions";

import { connect } from "react-redux";

class NoteDetailButtons extends Component {
  onConfirm = e => {
    this.props.addNote(this.props.note);
  };

  render() {
    return (
      <div className="ml-4 flex mb-12 justify-end">
        <button className="focus:outline-none">
          <i className="ml-4 far fa-star text-gray-700 hover:text-green-400"></i>
        </button>
        <button className="focus:outline-none">
          <i className="ml-4 far fa-folder text-gray-700 hover:text-green-400"></i>
        </button>
        <button className="focus:outline-none">
          <i className="ml-4 fas fa-pen text-gray-700 hover:text-green-400"></i>
        </button>
        <button className="focus:outline-none">
          <i className="ml-4 far fa-trash-alt text-gray-700 hover:text-green-400"></i>
        </button>
        <button onClick={this.onConfirm} className="focus:outline-none">
          <i className="ml-4 far fa-check-circle text-gray-700 hover:text-green-400"></i>
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addNote }
)(NoteDetailButtons);
