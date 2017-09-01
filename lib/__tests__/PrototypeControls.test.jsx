import React from 'react'
import PrototypeControls from '../PrototypeControls'
import { shallow, mount } from 'enzyme'

describe('<PrototypeControls />', () => {
  it('renders, empty when empty', () => {
    const wrapper = shallow(<PrototypeControls />)
    expect(wrapper.children().length).toEqual(0)
  })

  it('renders children, when show=true', () => {
    const wrapper = shallow(<PrototypeControls show={true}><div></div></PrototypeControls>)
    expect(wrapper.children().length).toEqual(1)
  })

  it('doesn\'t render children, when show=false', () => {
    const wrapper = shallow(<PrototypeControls show={false}><div></div></PrototypeControls>)
    expect(wrapper.children().length).toEqual(0)
  })

  it('doesn\'t render children when user presses anything else', () => {
    const wrapper = mount(<PrototypeControls><div></div></PrototypeControls>)
    expect(wrapper.children().length).toEqual(0)
    const event =
      new KeyboardEvent('keydown', {
        view: window,
        bubbles: true,
        cancelable: true,
        keyCode: 186
      })
    document.dispatchEvent(event)
    expect(wrapper.children().length).toEqual(0)
  })

  it('renders children when user presses ctrl + =', () => {
    const wrapper = mount(<PrototypeControls><div></div></PrototypeControls>)
    expect(wrapper.children().length).toEqual(0)
    const event =
      new KeyboardEvent('keydown', {
        view: window,
        bubbles: true,
        cancelable: true,
        ctrlKey: true,
        keyCode: 187
      })
    document.dispatchEvent(event)

    expect(wrapper.children().length).toEqual(1)
  })
})