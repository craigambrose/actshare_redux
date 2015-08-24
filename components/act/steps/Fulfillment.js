import React, { Component, PropTypes } from 'react';

export default class Claim extends Component {
  render() {
    return(
      <section className="act-step">
        <img src={this.props.actor.avatarUrl} className="avatar actor-avatar" />
        <div className="step-details">
          <p className="step-description">
            <span className="user-name">{this.props.actor.name}</span> has completed this demand:
          </p>
          <div className="step-attachments">
            <img src="http://placekitten.com/g/700/400" className="act-photo img-responsive" />
          </div>
        </div>
      </section>
    );
  }
}