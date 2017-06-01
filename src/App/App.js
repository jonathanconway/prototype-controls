import React, { Component } from 'react';

import Router from './Router';
import ResearchToolbar from './ResearchToolbar';

import prototypes from '../screens/prototypes';
import './ResearchToolbar/ResearchToolbar.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }  

  onLogIn = () => this.setState({loggedIn: true});
  
  onLogOut = () => this.setState({loggedIn: false});

  onChangePage = e => {
    const { value } = e.target;
    window.location.hash = value === '(home)' ? '' : value;
  };
  
  render() {
    return (
      <Router {...this.state}>
        <ResearchToolbar
        	{...this.state}
        	onLogIn={this.onLogIn}
        	onLogOut={this.onLogOut}
    	  >
          <span styleName="field">
            { this.state.loggedIn || <button onClick={this.onLogIn.bind(this)}>Log In</button> }
            { this.state.loggedIn && <button onClick={this.onLogOut.bind(this)}>Log Out</button> }
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
        </ResearchToolbar>
      </Router>
    );
  }
}

export default App;
