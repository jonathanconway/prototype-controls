import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import './Back.css';

class Back extends Component {
  static propTypes = {
    path: PropTypes.string
  };

  generateBackUrl(routeProps) {
    return routeProps
      .match
      .url
      .split('/')
      .reverse()
      .slice(1)
      .reverse()
      .concat([(parseInt(routeProps.match.params.step, 10) - 1)])
      .join('/');
  }

  render() {
    return (
      <Route path={this.props.path} render={(routeProps) =>
        <Link
          styleName="back"
          to={this.generateBackUrl(routeProps)}>
          { this.props.children || 'Back' }
        </Link>
      } />
    );
  }
}

export default Back;
