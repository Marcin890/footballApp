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
    const tableTypeButton = tableType.map(t => (
      <Tab
        active={t === this.state.activeTab}
        click={this.props.click}
        name={t}
        changeActiveTab={this.changeActiveTab}
      />
    ));
    console.log(this.state.activeTab);
    return <div className="competition__tabs">{tableTypeButton}</div>;
  }
}

export default Tabs;
