import React, { Component } from "react";
import SearchBar from "./SearchBar";
import Note from "./Note";
import AddButton from "./AddButton";

import {
  SHOW_ALL,
  SHOW_STARRED,
  SHOW_DELETED,
  SHOW_ARCHIEVED
} from "../actions/types";

import { setSelectedNote } from "../actions";

import { connect } from "react-redux";

import "./css/NoteList.css";

class NoteList extends Component {
  onSearchSubmit = term => {
    console.log("search term: ", term);
  };

  getVisibleNotes = notes => {
    const visibilityFilter = this.props.visibilityFilter;

    const sortedNotes = notes.sort((a, b) => {
      return new Date(b.updated_at) - new Date(a.updated_at);
    });

    switch (visibilityFilter) {
      case SHOW_ARCHIEVED:
        return sortedNotes.filter(note => note.archieved_at);
      case SHOW_STARRED:
        return sortedNotes.filter(note => note.starred);
      case SHOW_DELETED:
        return sortedNotes.filter(note => note.deleted_at);
      case SHOW_ALL:
        return sortedNotes.filter(
          note => note.deleted_at === null && note.archieved_at === null
        );
      default:
        return sortedNotes;
    }
  };

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
    const { notes } = this.props;
    const visibleNotes = this.getVisibleNotes(notes);
    if (visibleNotes.length) {
      this.props.setSelectedNote(visibleNotes[0]);
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
            <SearchBar onSubmit={this.onSearchSubmit} />

            <div className="flex flex-col overflow-y-auto">
              {this.renderNoteList()}
            </div>
          </div>

          <AddButton />
        </div>

        {/* 
        <div className="addNote">
          <AddNote addNote={this.addNote} />
        </div>
        <div className={notes.length > 0 ? "collection" : "hidden"}>
          {this.renderNoteList()}
        </div>
        */}
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
