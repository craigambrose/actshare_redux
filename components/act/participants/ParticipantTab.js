import React, { Component, PropTypes } from 'react';

export default class ParticipantTab extends Component {
  render() {
    console.log('props', this.props);
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