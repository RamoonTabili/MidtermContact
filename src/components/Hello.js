import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Hello extends Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}

Hello.propTpyes = {
    name: PropTypes.string.isRequired
};