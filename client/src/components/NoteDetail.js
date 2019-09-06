import React, { Component } from "react";
import { deleteNote, editNote } from "../actions";
import { connect } from "react-redux";
import "./css/NoteDetail.css";

class NoteDetail extends Component {
  render() {
    return (
      <div className="bg-white flex-auto flex flex-col px-16 pt-24 justify-between">
        <div>
          <div className="tracking-wider text-green-500 font-bold text-2xl">
            Title 1
          </div>
          <p className="text-sm font-medium text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="ml-4 flex mb-12 justify-end">
          <a href="#">
            <i className="ml-4 far fa-star text-gray-700 hover:text-green-400"></i>
          </a>
          <a href="#">
            <i className="ml-4 far fa-folder text-gray-700 hover:text-green-400"></i>
          </a>
          <a href="#">
            <i className="ml-4 fas fa-pen text-gray-700 hover:text-green-400"></i>
          </a>
          <a href="#">
            <i className="ml-4 far fa-trash-alt text-gray-700 hover:text-green-400"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteNote, editNote }
)(NoteDetail);
