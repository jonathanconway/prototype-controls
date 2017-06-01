import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';

import MainMenu from '../../screens/MainMenu';
import prototypes from '../../screens/prototypes';

class Router extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route
            exact
            path="/"
            component={MainMenu} />
          <Route
            path="/:prototype"
            render={(matchProps) => {
              const Prototype = prototypes[matchProps.match.params.prototype];
              return <Prototype />
            }} />

          { this.props.children }
        </div>
      </HashRouter>
    );
  }
}

export default Router;
