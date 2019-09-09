import React, { Component } from "react";

class AddNote extends Component {
  state = {
    _id: 0,
    body: ""
  };

  handleChange = e => {
    this.setState({
      body: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({
      body: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter new task"
            type="text"
            onChange={this.handleChange}
            value={this.state.body}
          />
        </form>
      </div>
    );
  }
}

export default AddNote;
