import React, { Component, PropTypes } from 'react';

export default class UserNav extends Component {
  render() {
    return(
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <div className="sidebar-user">
              <img src="http://placekitten.com/g/75/75" width="75" height="75" className="avatar" />
              <div className="user-name">Coder Jade</div>
              <div className="user-username">@jade</div>
            </div>
          </li>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Shortcuts</a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    );
  }
}