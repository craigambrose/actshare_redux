import React, { Component, PropTypes } from 'react';
import ParticipantTabs from './participants/ParticipantTabs';
import _ from 'lodash'
import ActStep from './ActStep.js';
import { connect } from 'react-redux';

@connect(state => ({
  entities: state.entities,
  act: state.currentAct
}))
export default class Act extends Component {
  render() {
    let act = this.props.act;
    let entities = this.props.entities;
    let participants = [];
    let steps = [];

    for (let participant of act.participants) {
      participants.push({...participant, user: entities.users[participant.user]});
    }
    for (let step of act.steps) {
      steps.push({...step, actor: entities.users[step.actor]});
    }

    let stepNodes = _.map(steps, function(step){
      return (<ActStep {...step} key={step.id} />);
    });

    return(
      <div id="page-content-wrapper">
        <ParticipantTabs {...{participants: participants}} />
        <div className="container-fluid">
          <article className="act-steps">

            { stepNodes }

            <section className="act-step incomplete-step">
              <img src="http://placekitten.com/g/75/75" className="avatar actor-avatar" />
              <div className="step-details">
                <p className="step-description">
                  Waiting on you to to upload a photo...
                </p>
                <div className="step-forms">
                  <input type="file" />
                </div>
              </div>
            </section>

          </article>
        </div>
      </div>
    );
  }
}