import React, { Component, PropTypes } from 'react';

export default class Claim extends Component {
  render() {
    return(
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
    );
  }
}