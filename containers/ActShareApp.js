import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';

import UserNav from '../components/UserNav';
import Router from 'react-router';

var RouteHandler = Router.RouteHandler;

@connect(state => ({
  counter: state.counter
}))

export default class ActShareApp extends Component {
  render() {
    return (
      <div id="wrapper">
        <UserNav />
        <RouteHandler />
      </div>
    );
  }
}
