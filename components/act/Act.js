import React, { Component, PropTypes } from 'react';
import ParticipantTabs from 'participants/ParticipantTabs';

export default class Act extends Component {
  render() {
    return(
      <div id="page-content-wrapper">
        <ParticipantTabs />
        <div className="container-fluid">
          <article className="act-steps">

            <section className="act-step">
              <img src="http://placekitten.com/g/75/75" className="avatar actor-avatar" />
              <div className="step-details">
                <p className="step-description">
                  <span className="user-name">Coder Jade</span> volunteers to perform one
                  submissive act.
                </p>
              </div>
            </section>

            <section className="act-step">
              <img src="http://api.adorable.io/avatars/75/2.png" className="avatar actor-avatar" />
              <div className="step-details">
                <p className="step-description">
                  <span className="user-name">Grandmaster Bob</span> claims this act
                  and demands:
                </p>
                <div className="step-attachments">
                  <blockquote className="demand">
                    <p>I'll call this 'Pot Luck'. I am reposting all of my previous demands all at once. For those who
                      like variety you have a good chance of not getting the same thing twice.
                      If you have been here for a while and been active you may recognize these. Don't be boring
                      and post and old photo. Take a new one. There are 13 in all and I will number them. This
                      is number ## 2 ##.</p>

                    <p>When it is very late tonight take a picture of yourself outside naked. For best results use
                      a flash so you are all nice and bright and the darkness is around you. Right after taking the
                      picture look around to see if anyone saw you. :)</p>
                  </blockquote>
                </div>
              </div>
            </section>

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