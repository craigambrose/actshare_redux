import React, { Component, PropTypes } from 'react';

export default class ActParticipant extends Component {
  render() {
    console.log('props', this.props);
    return (
      <a href="#" className="participant-link">
        <img src={this.props.avatar_url} className="avatar" />
      </a>
    );
  }
}