import React, { Component } from 'react';
import { Route } from 'react-router';

import Header from '../../../components/Header';

import Select from './Select';
import Cert from './Cert';
import TwoFA from './TwoFA';

class ChoiceThing extends Component {
  render() {
    return (
      <div>
        <Header />
        <main role="main">
          <article id="content" className="content-main">
            <Route path="/:prototype" exact component={Select} />
            <Route path="/:prototype/cert" component={Cert} />
            <Route path="/:prototype/_2fa" component={TwoFA} />
          </article>
          <aside className="sidebar">
            <small></small>
          </aside>
        </main>
      </div>
    );
  }
}

export default ChoiceThing;
