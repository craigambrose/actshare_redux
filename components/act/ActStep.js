import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class ActStep extends Component {
  render() {
    return React.createElement(require('./steps/' + this.props.type), this.props);
  }
}
