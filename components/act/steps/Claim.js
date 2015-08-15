import React, { Component, PropTypes } from 'react';

export default class Claim extends Component {
  render() {
    return(
      <section className="act-step">
        <img src={this.props.actor.avatarUrl} className="avatar actor-avatar" />
        <div className="step-details">
          <p className="step-description">
            <span className="user-name">{this.props.actor.name}</span> claims this act
            and demands:
          </p>
          <div className="step-attachments">
            <blockquote className="demand">
              { this.props.demand }
            </blockquote>
          </div>
        </div>
      </section>
    );
  }
}