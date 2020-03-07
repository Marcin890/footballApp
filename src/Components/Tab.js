import React, { Component } from "react";

class Tab extends Component {
  state = {};

  handleClick = () => {
    this.props.click(this.props.name);
    this.props.changeActiveTab(this.props.name);
  };

  render() {
    console.log(`${this.props.name}:${this.props.active}`);
    return (
      <button
        className={this.props.active ? "tab--active" : "tab"}
        onClick={this.handleClick}
      >
        {this.props.name}
      </button>
    );
  }
}

export default Tab;
