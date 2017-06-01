import React, { Component } from 'react';

import './ResearchToolbar.css';

class ResearchToolbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  componentDidMount() {
    this.toggle = (evt) => {
      evt = evt || window.event;
      if (evt.ctrlKey && evt.keyCode === 187) {
        this.setState({ show: !(this.state.show) });
      }
    };

    document.addEventListener('keydown', this.toggle);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.toggle);
  }

  onHide = () => this.setState({ show: !(this.state.show) });

  render = () => (this.state.show &&
    <div styleName="research-toolbar">
      {this.props.children}

      <button className="fr" style={{float: 'right'}} onClick={this.onHide.bind(this)}>Hide</button>
    </div>
  );
}

export default ResearchToolbar;
