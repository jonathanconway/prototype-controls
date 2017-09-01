import React from 'react'
import App from '../App'
import { shallow } from 'enzyme'

describe('<App />', () => {
  it('renders with prototypecontrols', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('PrototypeControls')).toHaveLength(1)
  })
})