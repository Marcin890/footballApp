import React, { Component } from "react";
import Tab from "./Tab";
const tableType = ["total", "home", "away"];

class Tabs extends Component {
  state = {
    activeTab: "total"
  };

  changeActiveTab = tab => {
    this.setState({
      activeTab: tab
    });
  };

  render() {
    const tableTypeButton = tableType.map(type => (
      <Tab
        key={type}
        active={type === this.state.activeTab}
        click={this.props.click}
        name={type}
        changeActiveTab={this.changeActiveTab}
      />
    ));

    return <div className="competition__tabs">{tableTypeButton}</div>;
  }
}

export default Tabs;
