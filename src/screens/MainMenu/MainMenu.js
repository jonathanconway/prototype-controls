import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import prototypes from '../prototypes';

class MainMenu extends Component {
  render = () => (
    <div>
      <Header />
      <main role="main">
        <article id="content" className="content-main">
          <h2>Choose a prototype:</h2>
          <nav>
            { Object.keys(prototypes).map((name, index) =>
              <p key={index}>
                <Link to={`/${name.toLowerCase()}`}>{name}</Link>
              </p>
            ) }
          </nav>
        </article>
      </main>
    </div>
  );
}

export default MainMenu;
