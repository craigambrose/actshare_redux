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
        type: 'SubmissionVolunteer',
        actor: {
          id: 2,
          name: 'Coder Jade',
          avatarUrl: 'http://placekitten.com/g/75/75'
        }
      },
      {
        id: 22,
        type: 'Claim',
        actor: {
          id: 1,
          name: 'Grandmaster Bob',
          avatarUrl: 'http://api.adorable.io/avatars/75/2.png'
        },
        demand: "I'll call this 'Pot Luck'. I am reposting all of my previous demands all at once. For those who like variety you have a good chance of not getting the same thing twice. If you have been here for a while and been active you may recognize these. Don't be boring and post and old photo. Take a new one. There are 13 in all and I will number them. This is number ## 2 ##.\n\nWhen it is very late tonight take a picture of yourself outside naked. For best results use a flash so you are all nice and bright and the darkness is around you. Right after taking the picture look around to see if anyone saw you. :)"
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