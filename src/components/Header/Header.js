import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
  static propTypes = {
    pageHeaderChildren: PropTypes.array.isRequired
  }

  static defaultProps = {
    pageHeaderChildren: []
  }

  render() {
    return (
      <header role="banner">
        <section className="page-header" styleName="page-header">
          <div className="wrapper">
            <div className="page-header__logo">
              <span styleName="badge--alpha" className="badge--alpha">Prototype</span>
              <Link to="/" styleName="logo" className="logo" style={{ borderBottom: '0' }}>
                <span>Prototype Controls</span>
              </Link>
            </div>
            {this.props.pageHeaderChildren}
          </div>
        </section>
        {this.props.children}
      </header>
    );
  }
}

export default Header;
