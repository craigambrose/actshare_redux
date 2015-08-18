import React, { Component, PropTypes } from 'react';
import ParticipantTabs from './participants/ParticipantTabs';
import _ from 'lodash'
import ActStep from './ActStep.js';
import { connect } from 'react-redux';
import { loadAct } from '../../actions';

function loadData(props) {
  const { slug } = props.routeParams;
  props.loadAct(slug);
}

class Act extends Component {
  componentWillMount() {
    loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.routeParams.slug !== this.props.routeParams.slug) {
      loadData(nextProps);
    }
  }

  render() {
    let act = this.props.act;
    let entities = this.props.entities;
    let participants = [];
    let stepNodes = [];

    if (act) {
      //for (let participant of act.participants) {
      //  participants.push({...participant, user: entities.users[participant.user]});
      //}
     stepNodes = _.map((act.steps || []), function(step){
        return (<ActStep key={step.id} {...step} />);
      });
    }

    //<ParticipantTabs {...{participants: participants}} />

    return(
      <div id="page-content-wrapper">
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

function mapStateToProps(state) {
  let act = (state.currentAct ? state.entities.acts[state.currentAct] : null);
  if (act) {
    act = {...act}
    act.steps = _.map((act.steps || []), function(step){
      return state.entities.steps[step];
    });
  }

  return {
    entities: state.entities,
    act: act
  };
}

export default connect(
  mapStateToProps,
  { loadAct }
)(Act);
