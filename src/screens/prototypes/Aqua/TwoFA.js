import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
import back from '../../../containers/Wizard/Back/Back.css'; // eslint-disable-next-line
import focusPanel from './FocusPanel.css';

class TwoFA extends Component {
  render() {
    return (
      <div className="body">
        <article className="main">
          <h2>2 factor with SMS</h2>
          <div styleName="focusPanel.focus-panel">
            <div>
              <ul>
                <li>Great for infrequent or new users</li>
                <li>No password to remember</li>
                <li>2 factor increases security</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export default TwoFA;
