import React, { Component, PropTypes } from 'react';

export default class ParticipantTab extends Component {
  render() {
    let classNames = 'participant-link';
    if (this.props.selected) {
      classNames += ' active'
    }

    return (
      <a href="#" className={classNames}>
        <img src={this.props.user.avatarUrl} className="avatar" />
      </a>
    );
  }
}