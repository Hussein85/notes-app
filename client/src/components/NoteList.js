import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Note from "./Note";
import AddButton from "./AddButton";
import { getVisibleNotes } from "./utils";

import { setSelectedNote } from "../actions";

import { connect } from "react-redux";

import "./css/NoteList.css";

class NoteList extends Component {
  searchedNotes = (notes, searchTerm) => {
    if (searchTerm === "") {
      return notes;
    } else {
      return notes.filter(note => {
        return note.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
    }
  };

  renderNoteList() {
    const { notes, visibilityFilter } = this.props;
    const visibleNotes = getVisibleNotes(notes, visibilityFilter);
    if (visibleNotes.length) {
      this.props.setSelectedNote(visibleNotes[0]);
    } else {
      this.props.setSelectedNote({});
    }

    const searchTerm = this.props.searchTerm;
    const filteredNotes = this.searchedNotes(visibleNotes, searchTerm);

    return (
      filteredNotes &&
      filteredNotes.map(note => {
        return <Note key={note._id} note={note} />;
      })
    );
  }

  render() {
    return (
      <div>
        <div className="bg-custom-lighterBlue flex w-64 h-full flex-col justify-between">
          <div>
            <SearchBar />
            <div className="flex flex-col overflow-y-auto">
              {this.renderNoteList()}
            </div>
          </div>
          <AddButton />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    notes: state.notes,
    visibilityFilter: state.visibilityFilter,
    searchTerm: state.searchTerm
  };
}

export default connect(
  mapStateToProps,
  {
    setSelectedNote
  }
)(NoteList);
