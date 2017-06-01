import React, { Component } from 'react';

import Router from './Router';
import ResearchToolbar from './ResearchToolbar';

class App extends Component {
  render() {
    return (
      <Router>
        <ResearchToolbar />
      </Router>
    );
  }
}

export default App;
