import React, { Component } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import './ResearchToolbar.css';

import prototypes from '../../screens/prototypes';

class ResearchToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.toggle = (evt) => {
      evt = evt || window.event;
      if (evt.ctrlKey && evt.keyCode === 187) {
        this.setState({ show: !(this.state.show) });
      }
    };

    document.addEventListener('keydown', this.toggle);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.toggle);
  }

  onHide() {
    this.setState({ show: !(this.state.show) });
  }

  onChangePage(e) {
    const { value } = e.target;
    window.location.hash = value === '(home)' ? '' : value;
  }

  onLogIn(e) {
    this.props.onLogIn();
  }

  onLogOut(e) {
    this.props.onLogOut();
  }

  render() {
    return (this.state.show &&
      <div styleName="research-toolbar">
        <span styleName="field">
          { this.props.loggedIn || <button onClick={this.onLogIn.bind(this)}>Log In</button> }
          { this.props.loggedIn && <button onClick={this.onLogOut.bind(this)}>Log Out</button> }
        </span>
        <span styleName="field">
          <label
            htmlFor="page">Prototype:</label>
          <select
            id="page"
            onChange={this.onChangePage}>
            <option key="00" value="#/">(home)</option>
            {
              Object.keys(prototypes).map((name, index) =>
                <option key={index} value={name}>{name}</option>
              )
            }
          </select>
        </span>

        <button className="fr" style={{float: 'right'}} onClick={this.onHide.bind(this)}>Hide</button>
      </div>
    );
  }
}

export default ResearchToolbar;
