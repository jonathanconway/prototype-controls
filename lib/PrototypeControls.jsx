import React from 'react'

export default class PrototypeControls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: null
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.toggle);
  }

  toggle = e => (e.ctrlKey && e.keyCode === 187) && this.setState({ show: !(this.state.show) })

  render = () => (this.state.show === true || this.props.show === true)
    ? <div style={{
        'position': 'fixed',
        'bottom': '0',
        'left': '0',
        'width': '100%',
        'display': 'inline-block',
        'padding': '0.5rem',

        'backgroundColor': '#f3f3f3',
        'borderTop': 'solid 1px #cccccc'
      }}>
        {this.props.children}
      </div>
    : null
}