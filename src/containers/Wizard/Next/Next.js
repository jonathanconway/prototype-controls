import React, { Component, PropTypes } from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import './Next.css';

class Next extends Component {
  static propTypes = {
    path: PropTypes.string,
    skip: PropTypes.number
  };

  generateNextUrl(routeProps) {
    return routeProps
      .match
      .url
      .split('/')
      .reverse()
      .slice(1)
      .reverse()
      .concat([(parseInt(routeProps.match.params.step, 10) + 1 + (this.props.skip || 0))])
      .join('/');
  }

  render() {
    return (
      <Route path={this.props.path} render={(routeProps) =>
        <Link
          styleName="next button"
          role="button"
          to={this.generateNextUrl(routeProps)}>
          { this.props.children || 'Next' }
        </Link>
      } />
    );
  }
}

export default Next;
