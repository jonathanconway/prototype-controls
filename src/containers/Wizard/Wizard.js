import React, { Component, PropTypes } from 'react';
import { Route, Redirect } from 'react-router';

class Wizard extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired
  };

  render() {
    const path = this.props.path || '/:prototype/:step?';
    return (
      <Route path={path} render={(routeProps) => {
        const step = parseInt(routeProps.match.params.step, 10);
        const children = this.props.children.map(
          (item, index) => React.cloneElement(item, {
            isFirst: step <= 1,
            isLast: step >= this.props.children.length,
            path: path,
            show: (index !== (step - 1)),
            key: index
          }));

        return (
          <div>
            { isNaN(step) && <Redirect to={`${routeProps.match.url}/1`} /> }

            { children.map((child, index) =>
              child
            ) }
          </div>
        );
      }} />
    );
  }
}

export default Wizard;
