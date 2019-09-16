import React, { Component } from "react";
import { deleteNote, editNote, setVisibilityFilter } from "../actions";
import {
  SHOW_ALL,
  SHOW_STARRED,
  SHOW_DELETED,
  SHOW_ARCHIEVED
} from "../actions/types";
import { connect } from "react-redux";
import "./css/Sidebar.css";

const icons = [
  { title: "My notes", icon: "far fa-sticky-note fa-lg", filter: SHOW_ALL },
  { title: "Starred", icon: "far fa-star fa-lg", filter: SHOW_STARRED },
  { title: "Archived", icon: "far fa-folder fa-lg", filter: SHOW_ARCHIEVED },
  { title: "Deleted", icon: "far fa-trash-alt fa-lg", filter: SHOW_DELETED }
];

let menuButtonsAdjust = {
  marginLeft: "2px"
};

class Sidebar extends Component {
  getClass(filter, classTrue, classFalse) {
    const visibilityFilter = this.props.visibilityFilter;
    return visibilityFilter === filter ? classTrue : classFalse;
  }

  render() {
    const visibilityFilter = this.props.visibilityFilter;
    return (
      <div className="sidebarContainer background-gradient opacityBlur pt-8">
        {icons.map((icon, id) => {
          return (
            <div
              key={id}
              style={visibilityFilter === icon.filter ? {} : menuButtonsAdjust}
              className={
                "pl-4 mb-4 mr-16 " +
                this.getClass(icon.filter, "selectedMenuTitle", "")
              }
            >
              <button
                onClick={() => {
                  this.props.setVisibilityFilter(icon.filter);
                }}
                className={
                  "icon outline-none " +
                  this.getClass(
                    icon.filter,
                    "selectedMenuTitleText",
                    "menuTitleText"
                  )
                }
              >
                <i
                  className={
                    icon.icon +
                    this.getClass(
                      icon.filter,
                      " selectedMenuTitleText",
                      " iconText"
                    )
                  }
                ></i>
                <span className="ml-2 ">{icon.title}</span>
              </button>
            </div>
          );
        })}
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
  { deleteNote, editNote, setVisibilityFilter }
)(Sidebar);
