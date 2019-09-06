import React, { Component } from "react";
import { deleteNote, editNote } from "../actions";
import { connect } from "react-redux";
import "./css/Sidebar.css";

class Sidebar extends Component {
  render() {
    return (
      <div className="background flex-none flex-initial opacity-75 box rounded-l-lg">
        <div className=" mt-12 pl-4 mb-2 mr-16 border-l-2 border-green-500">
          <i className="far fa-sticky-note text-green-500"></i>
          <a href="#" className="text-xs text-green-500 ml-2 font-bold">
            My notes
          </a>
        </div>
        <div className="p-2 ml-2 mr-10 mt-10">
          <a href="#" className="icon text-xs text-gray-700 font-medium">
            <i className="far fa-sticky-note text-gray-700 w-4"></i>
            <span className="ml-2">My notes</span>
          </a>
        </div>
        <div className="p-2 ml-2 mr-6">
          <a href="#" className="icon text-xs text-gray-700 font-medium">
            <i className="far fa-star text-gray-700 w-4"></i>
            <span className="ml-2">Starred</span>
          </a>
        </div>
        <div className="p-2 ml-2 mr-6">
          <a href="#" className="icon text-xs text-gray-700 font-medium">
            <i className="far fa-folder text-gray-700 w-4"></i>
            <span className="ml-2">Archived</span>
          </a>
        </div>
        <div className="p-2 ml-2 mr-6">
          <a href="#" className="icon text-xs text-gray-700 font-medium">
            <i className="far fa-trash-alt text-gray-700 w-4"></i>
            <span className="ml-2">Deleted</span>
          </a>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { deleteNote, editNote }
)(Sidebar);
