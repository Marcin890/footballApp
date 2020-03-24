import React, { Component } from "react";

class Tab extends Component {
  state = {};

  handleClick = () => {
    this.props.click(this.props.name);
    this.props.changeActiveTab(this.props.name);
  };

  render() {
    const { active, name } = this.props;
    return (
      <button
        className={active ? "tab--active" : "tab"}
        onClick={this.handleClick}
      >
        {name}
      </button>
    );
  }
}

export default Tab;
