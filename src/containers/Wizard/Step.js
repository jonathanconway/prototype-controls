import React, { Component, PropTypes } from 'react';
const { oneOfType, func, string } = PropTypes;
import classnames from 'classnames';

import Back from './Back';
import Next from './Next';

class Step extends Component {
  static propTypes = {
    back: oneOfType([ func, string ]),
    next: oneOfType([ func, string ]),
    isFirst: PropTypes.bool,
    isLast: PropTypes.bool,
    path: PropTypes.string,
    onShowChanged: PropTypes.func,
    show: PropTypes.bool
  };

  static defaultProps = {
    back: () => (<Back />),
    next: () => (<Next />),
    isFirst: false,
    isLast: false,
    show: true
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.show !== nextProps.show) {
      this.props.onShowChanged && this.props.onShowChanged();
    }
  }

  render() {
    const { children, isLast, isFirst, path, show } = this.props;
    var { back, next } = this.props;
    if (back) {
      back = React.cloneElement(back(), { path });
    }
    if (next) {
      next = React.cloneElement(next(), { path });
    }
    return (
      <div className={classnames({'visually-hidden': show})}>
        <div>
          { (!isFirst && !!back) && back }
        </div>

        { children }

        <div>
          { (!isLast && !!next) && next }
        </div>
      </div>
    );
  }
}

export default Step;
