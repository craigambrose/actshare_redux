import React, { Component, PropTypes } from 'react';

export default class ActStep extends Component {
  render() {
    return React.createElement(require('./steps/' + this.props.type), this.props);
  }
}