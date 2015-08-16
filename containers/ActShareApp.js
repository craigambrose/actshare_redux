import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import UserNav from '../components/UserNav';

export default class ActShareApp extends Component {
  render() {
    const { children } = this.props;

    return (
      <div id="wrapper">
        <UserNav />
        { children }
      </div>
    );
  }
}
