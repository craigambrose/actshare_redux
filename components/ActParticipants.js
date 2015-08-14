import React, { Component, PropTypes } from 'react';
import ActParticipant from './ActParticipant'

export default class ActParticipants extends Component {
  static defaultProps = {
    participants: [
      {
        id: 1,
        avatarUrl: 'http://api.adorable.io/avatars/75/2.png'
      },
      {
        id: 2,
        avatarUrl: 'http://placekitten.com/g/75/75'
      }
    ],
    selectedKey: 2
  };

  render() {
    let rows = [];
    console.log(this.props.participants);
    for (let participant of this.props.participants) {
      rows.push((<ActParticipant key={participant.id} selected={this.props.selectedKey == participant.id} {...participant} />));
    }

    return(
      <div id="act-participants">
        <div id="participant-tabs">
          { rows }
        </div>
        <div className="participant-details">
          <a href="#" className="participant-description">
            Submissive: Coder Jade
            <i className="glyphicon glyphicon-user" />
          </a>
        </div>
      </div>
    );
  }
}