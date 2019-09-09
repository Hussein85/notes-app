import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchTerm: ""
  };

  onChange = e => {
    this.setState({
      searchTerm: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.addNote(this.state.searchTerm);
    this.props.onSubmit(this.state.searchTerm);
    this.setState({
      searchTerm: ""
    });
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
            value={this.state.searchTerm}
          />
        </form>
        {/*
          <div>
            <form onSubmit={this.onSubmit}>
              <input
                placeholder="Search a note"
                type="text"
                onChange={this.onChange}
                value={this.state.searchTerm}
              />
            </form>
          </div>
          */}
      </div>
    );
  }
}

export default SearchBar;
