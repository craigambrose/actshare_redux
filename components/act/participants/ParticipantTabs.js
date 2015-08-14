import React, { Component, PropTypes } from 'react';
import ParticipantTab from './ParticipantTab'

export default class ParticipantTabs extends Component {
  static defaultProps = {
    participants: [
      {
        id: 1,
        role: 'Dominant',
        user: {
          name: 'Grandmaster Bob',
          avatarUrl: 'http://api.adorable.io/avatars/75/2.png'
        }
      },
      {
        id: 2,
        role: 'Submissive',
        user: {
          name: 'Coder Jade',
          avatarUrl: 'http://placekitten.com/g/75/75'
        }
      }
    ],
    selectedKey: 2
  };

  selectedParticipant() {
    for (let participant of this.props.participants) {
      if (participant.id == this.props.selectedKey) {
        return participant;
      }
    }
  }

  render() {
    let rows = [];
    console.log(this.props.participants);
    for (let participant of this.props.participants) {
      rows.push((<ParticipantTab key={participant.id} selected={this.props.selectedKey == participant.id} {...participant} />));
    }
    let participant = this.selectedParticipant();

    return(
      <div id="act-participants">
        <div id="participant-tabs">
          { rows }
        </div>
        <div className="participant-details">
          <a href="#" className="participant-description">
            {participant.role}: {participant.user.name}
            <i className="glyphicon glyphicon-user" />
          </a>
        </div>
      </div>
    );
  }
}