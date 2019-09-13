import React, { Component } from "react";
import { deleteNote, editNote } from "../actions";
import {
  SHOW_ALL,
  SHOW_STARRED,
  SHOW_DELETED,
  SHOW_ARCHIEVED
} from "../actions/types";
import { connect } from "react-redux";
import "./css/Sidebar.css";

class Sidebar extends Component {
  render() {
    const visibilityFilter = this.props.visibilityFilter;
    console.log("filter: ", visibilityFilter);
    return (
      <div className="sidebarContainer background-gradient opacityBlur pt-8">
        <div
          className={
            "pl-4 mb-4 mr-16 " +
            (visibilityFilter === SHOW_ALL ? "selectedMenuTitle" : "")
          }
        >
          <a href="#" className="icon menuTitleText">
            <i className="far fa-sticky-note fa-lg iconText"></i>
            <span className="ml-2">My notes</span>
          </a>
        </div>
        <div
          className={
            "pl-4 mb-4 mr-16 " +
            (visibilityFilter === SHOW_STARRED ? "selectedMenuTitle" : "")
          }
        >
          <a href="#" className="icon menuTitleText">
            <i className="far fa-star fa-lg iconText"></i>
            <span className="ml-2">Starred</span>
          </a>
        </div>
        <div
          className={
            "pl-4 mb-4 mr-16 " +
            (visibilityFilter === SHOW_ARCHIEVED ? "selectedMenuTitle" : "")
          }
        >
          <a href="#" className="icon menuTitleText">
            <i className="far fa-folder fa-lg iconText"></i>
            <span className="ml-2">Archived</span>
          </a>
        </div>
        <div
          className={
            "pl-4 mb-4 mr-16 " +
            (visibilityFilter === SHOW_DELETED ? "selectedMenuTitle" : "")
          }
        >
          <a href="#" className="icon menuTitleText">
            <i className="far fa-trash-alt fa-lg iconText"></i>
            <span className="ml-2">Deleted</span>
          </a>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    visibilityFilter: state.visibilityFilter
  };
}

export default connect(
  mapStateToProps,
  { deleteNote, editNote }
)(Sidebar);
