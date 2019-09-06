import React, { Component } from "react";
import AddNote from "./AddNote";
import Note from "./Note";

import { connect } from "react-redux";
import { fetchNotes, addNote } from "../actions";
import "./css/NoteList.css";

class NoteList extends Component {
  state = {
    editing: false
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

  addNote = note => {
    this.props.addNote(note);
  };

  renderNoteList() {
    const { notes } = this.props;

    let viewStyle = {};
    let editStyle = {};

    if (this.state.editing) {
      viewStyle.display = "none";
    } else {
      editStyle.display = "none";
    }

    return (
      notes &&
      notes.map(note => {
        return <Note key={note._id} note={note} />;
      })
    );
  }

  render() {
    const { notes } = this.props;
    return (
      <div>
        <div className="bg-green-100 flex w-64 flex-col justify-between">
          <div>
            <div className="flex flex-row p-4 mt-4">
              <input
                className=" rounded-lg h-10 w-56 pl-4 focus:outline-none  focus:shadow-outline "
                type="text"
                placeholder="Search notes"
              />
              <i className="fas fa-search text-sm text-gray-400 absolute ml-48 mt-4"></i>
            </div>

            <div className="flex flex-col overflow-y-auto">
              <div className="p-4">
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="hover:text-green-400 tracking-wider text-xs font-bold text-gray-600"
                  >
                    Title 1
                  </a>
                  <div className="text-gray-400 text-xs font-medium">
                    21/11/17
                  </div>
                </div>
                <p className="text-gray-400 text-xs font-medium truncate">
                  Lorem ipsum dolor sit amet, fsdf sdf sf dsf sf fsdf sdf sdf
                  sdf sdf dsfsd fsdf ds
                </p>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="hover:text-green-400 tracking-wider text-xs font-bold text-gray-600"
                  >
                    Title 2
                  </a>
                  <div className="text-gray-400 text-xs font-medium">
                    20/11/17
                  </div>
                </div>
                <p className="text-gray-400 text-xs font-medium truncate">
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </p>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="hover:text-green-400 tracking-wider text-xs font-bold text-gray-600"
                  >
                    Title 3
                  </a>
                  <div className="text-gray-400 text-xs font-medium">
                    19/11/17
                  </div>
                </div>
                <p className="text-gray-400 text-xs font-medium truncate">
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </p>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="hover:text-green-400 tracking-wider text-xs font-bold text-gray-600"
                  >
                    Title 4
                  </a>
                  <div className="text-gray-400 text-xs font-medium">
                    18/11/17
                  </div>
                </div>
                <p className="text-gray-400 text-xs font-medium truncate">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="hover:text-green-400 tracking-wider text-xs font-bold text-gray-600"
                  >
                    Title 5
                  </a>
                  <div className="text-gray-400 text-xs font-medium">
                    18/11/17
                  </div>
                </div>
                <p className="text-gray-400 text-xs font-medium truncate">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </p>
              </div>
              <div className="p-4">
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="hover:text-green-400 tracking-wider text-xs font-bold text-gray-600"
                  >
                    Title 6
                  </a>
                  <div className="text-gray-400 text-xs font-medium">
                    17/11/17
                  </div>
                </div>
                <p className="text-gray-400 text-xs font-medium truncate">
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </p>
              </div>

              <div className="p-4">
                <div className="flex justify-between">
                  <a
                    href="#"
                    className="hover:text-green-400 tracking-wider text-xs font-bold text-gray-600"
                  >
                    Title 7
                  </a>
                  <div className="text-gray-400 text-xs font-medium">
                    17/11/17
                  </div>
                </div>
                <p className="text-gray-400 text-xs font-medium truncate">
                  Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-10">
            <a
              href="#"
              className=" w-56 inline-block text-center px-5 py-3 rounded-lg shadow-lg bg-green-500 hover:bg-green-400 text-xs text-white uppercase tracking-wider font-semibold"
            >
              Add a note
            </a>
          </div>
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

function mapStateToProps({ notes }) {
  return { notes };
}

export default connect(
  mapStateToProps,
  { fetchNotes, addNote }
)(NoteList);
