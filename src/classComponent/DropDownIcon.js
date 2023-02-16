import React, { Component } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
export default class DropDownIcon extends Component {
  iconStyle = {
    color: "white",
    padding: "0px 20px 0px 5px",
  };
  render() {
    return (
      <div>
        <HiOutlineChevronDown style={this.iconStyle} />
      </div>
    );
  }
}
