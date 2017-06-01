import React, { Component } from 'react';
import { Route } from 'react-router';

import Header from '../../../components/Header';
import LogIn from './LogIn';
import Home from './Home';

class Cyan extends Component {
  render = () => (
    <div>
      <Header />
      <main role="main">
        <article id="content" className="content-main">
          { this.props.loggedIn || <LogIn /> }
          { this.props.loggedIn && <Home /> }
        </article>
        <aside className="sidebar">
          <small></small>
        </aside>
      </main>
    </div>
  );
}

export default Cyan;
