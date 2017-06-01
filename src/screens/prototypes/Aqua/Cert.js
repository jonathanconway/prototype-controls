import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line
import back from '../../../containers/Wizard/Back/Back.css'; // eslint-disable-next-line
import focusPanel from './FocusPanel.css';

class Cert extends Component {
  render = () => (
    <div className="body">
      <article className="main">
        <h2>Digital certificate</h2>
        <div styleName="focusPanel.focus-panel">
          <div>
            <ul>
              <li>Great for those who sign in frequently but work at one computer</li>
              <li>Minimal sign in steps</li>
              <li>Secure initial activation</li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Cert;
