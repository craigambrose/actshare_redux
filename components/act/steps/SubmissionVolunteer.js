import React, { Component, PropTypes } from 'react';

export default class SubmissionVolunteer extends Component {
  render() {
    return(
      <section className="act-step">
        <img src="http://placekitten.com/g/75/75" className="avatar actor-avatar" />
        <div className="step-details">
          <p className="step-description">
            <span className="user-name">Coder Jade</span> volunteers to
            perform one submissive act.
          </p>
        </div>
      </section>
    );
  }
}