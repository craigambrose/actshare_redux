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

    if (act) {
      let stepNodes = [];
      let nextStep = null;

      stepNodes = _.map((act.steps || []), function(step){
        return (<ActStep key={step.id} {...step} />);
      });

      // Temporary hack
      if (act.steps.length == 2) {
        nextStep = (
          <section className="act-step incomplete-step">
            <img src="http://api.adorable.io/avatars/75/2.png" className="avatar actor-avatar" />
            <div className="step-details">
              <p className="step-description">
                Waiting on you to to upload a photo...
              </p>
              <div className="step-forms">
                <input type="file" />
              </div>
            </div>
          </section>
        );
      }

      return(
        <div id="page-content-wrapper">
          <ParticipantTabs {...{participants: act.participants}} />

          <div className="container-fluid">
            <article className="act-steps">
              { stepNodes }
              { nextStep }
            </article>
          </div>
        </div>
      );
    } else {
      return (
        <div id="page-content-wrapper">
        </div>
      );
    }

  }
}

function mapStateToProps(state) {
  let act = (state.currentAct ? state.entities.acts[state.currentAct] : null);
  if (act) {
    act = {...act}
    act.steps = _.map((act.steps || []), function(step){
      let stepEntity = state.entities.steps[step];
      if (stepEntity) {
        let newStep = {...stepEntity, actor: state.entities.users[stepEntity.actor]};
        return newStep;
      }
      return null;
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
