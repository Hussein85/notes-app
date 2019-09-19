import React, { Component } from "react";
import { setSearchTerm } from "../actions";
import { connect } from "react-redux";

class SearchBar extends Component {
  onChange = e => {
    this.props.setSearchTerm(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.setSearchTerm(this.props.searchTerm);
  };

  render() {
    return (
      <div className="flex flex-row p-4 mt-4">
        <form onSubmit={this.onSubmit}>
          <i className="fas fa-search text-sm text-gray-400 absolute ml-48 mt-4"></i>
          <input
            className=" rounded-lg h-10 w-56 pl-4 focus:outline-none focus:shadow-outline "
            placeholder="Search a note"
            type="text"
            onChange={this.onChange}
            value={this.props.searchTerm}
          />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}

export default connect(
  mapStateToProps,
  { setSearchTerm }
)(SearchBar);
