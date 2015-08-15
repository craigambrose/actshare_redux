import React, { Component, PropTypes } from 'react';
import ParticipantTabs from './participants/ParticipantTabs';
import _ from 'lodash'
import ActStep from './ActStep.js';

export default class Act extends Component {
  static defaultProps = {
    participants: [
      {
        role: 'Dominant',
        user: {
          id: 1,
          name: 'Grandmaster Bob',
          avatarUrl: 'http://api.adorable.io/avatars/75/2.png'
        }
      },
      {
        role: 'Submissive',
        user: {
          id: 2,
          name: 'Coder Jade',
          avatarUrl: 'http://placekitten.com/g/75/75'
        }
      }
    ],
    steps: [
      {
        id: 324,
        type: 'SubmissionVolunteer'
      },
      {
        id: 22,
        type: 'Claim'
      }
    ]
  };

  render() {
    let stepNodes = _.map(this.props.steps, function(step){
      return (<ActStep {...step} key={step.id} />);
    });

    return(
      <div id="page-content-wrapper">
        <ParticipantTabs {...this.props} />
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