import React from 'react'
import PrototypeControls from '../lib/PrototypeControls'

export default class App extends React.Component {
  render = () => <div data-test="app">
    <h1>Prototype Controls – Simple Example</h1>

    <p>Press <kbd>Ctrl</kbd> + <kbd>=</kbd> to toggle toolbar.</p>

    <PrototypeControls><button>Hello</button></PrototypeControls>
  </div>
}