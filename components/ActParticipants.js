import React, { Component, PropTypes } from 'react';

export default class ActParticipants extends Component {
  render() {
    return(
      <div id="act-participants">
        <div id="participant-tabs">
          <a href="#" className="participant-link">
            <img src="http://api.adorable.io/avatars/75/2.png" className="avatar" />
          </a>
          <a href="#" className="participant-link active">
            <img src="http://placekitten.com/g/75/75" className="avatar" />
          </a>
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