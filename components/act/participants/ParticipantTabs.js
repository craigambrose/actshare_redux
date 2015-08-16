import React, { Component, PropTypes } from 'react';
import ParticipantTab from './ParticipantTab'

export default class ParticipantTabs extends Component {
  static defaultProps = {
    participants: [],
    selectedKey: 2
  };

  selectedParticipant() {
    for (let participant of this.props.participants) {
      if (participant.user.id == this.props.selectedKey) {
        return participant;
      }
    }
  }

  render() {
    let rows = [];
    for (let participant of this.props.participants) {
      rows.push((<ParticipantTab key={participant.user.id} selected={this.props.selectedKey == participant.user.id} {...participant} />));
    }
    let participant = this.selectedParticipant();

    let details = null;

    if (participant) {
      details = (
        <div className="participant-details">
          <a href="#" className="participant-description">
            {participant.role}: {participant.user.name}
            <i className="glyphicon glyphicon-user" />
          </a>
        </div>
      );
    }

    return(
      <div id="act-participants">
        <div id="participant-tabs">
          { rows }
        </div>
        { details }
      </div>
    );
  }
}