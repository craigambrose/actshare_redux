import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//import Counter from '../components/Counter';
import UserNav from '../components/UserNav';
import Act from '../components/act/Act';

import * as CounterActions from '../actions/CounterActions';

export default class ActShareApp extends Component {
  render() {
    const { counter, dispatch } = this.props;
    return (
      <div id="wrapper">
        <UserNav />
        <Act />
      </div>
    );
  }
}

// <Counter counter={counter} {...bindActionCreators(CounterActions, dispatch)} />
