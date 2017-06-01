import React, { Component } from 'react';

import Router from './Router';
import ResearchToolbar from './ResearchToolbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
  }  

  onLogIn = () => this.setState({loggedIn: true})
  
  onLogOut = () => this.setState({loggedIn: false})
  
  render() {
    return (
      <Router {...this.state}>
        <ResearchToolbar
        	{...this.state}
        	onLogIn={this.onLogIn}
        	onLogOut={this.onLogOut}
    	/>
      </Router>
    );
  }
}

export default App;
