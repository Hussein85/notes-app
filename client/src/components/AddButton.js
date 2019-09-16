import React, { Component } from "react";
import { ADD_MODE } from "../actions/types";
import { setMode, resetSelectedNoteProperties } from "../actions";
import { connect } from "react-redux";

class AddButton extends Component {
  onAddButtonClick = e => {
    this.props.setMode(ADD_MODE);
    this.props.resetSelectedNoteProperties();
  };

  renderButton() {
    const mode = this.props.mode;
    console.log("mode", mode);

    if (mode === ADD_MODE) {
      return <button className="buttonDisabled">Add a note</button>;
    } else {
      return (
        <button onClick={this.onAddButtonClick} className="btn2 btn2-green">
          Add a note
        </button>
      );
    }
  }

  render() {
    return (
      <div className="flex justify-center mb-10">{this.renderButton()}</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    mode: state.mode
  };
}

export default connect(
  mapStateToProps,
  { setMode, resetSelectedNoteProperties }
)(AddButton);
