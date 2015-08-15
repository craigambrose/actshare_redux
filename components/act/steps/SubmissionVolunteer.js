import React, { Component, PropTypes } from 'react';

export default class SubmissionVolunteer extends Component {
  render() {
    return(
      <section className="act-step">
        <img src={this.props.actor.avatarUrl} className="avatar actor-avatar" />
        <div className="step-details">
          <p className="step-description">
            <span className="user-name">{this.props.actor.name}</span> volunteers to
            perform one submissive act.
          </p>
        </div>
      </section>
    );
  }
}