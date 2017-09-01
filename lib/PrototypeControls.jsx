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

  render = () => <div>
    {(this.state.show === true || this.props.show === true) ? this.props.children : null}
  </div>
}