import React, { Component, PropTypes } from 'react';
import uuid from 'uuid/v1';
import classNames from 'classnames';

import './OptionPanel.css';

class OptionPanel extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    inputType: PropTypes.string.isRequired,
    defaultIndex: PropTypes.number,
    onChange: PropTypes.func,
    styled: PropTypes.bool,
    name: PropTypes.string
  };

  static defaultProps = {
    styled: true
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: isNaN(props.defaultIndex) ? [] : [props.defaultIndex]
    };
    this.group = uuid();
  }

  getUpdatedCheckedStateWithChange(event) {
    const { inputType } = this.props;
    const checkedState = this.state.checked || [];
    const targetName = parseInt(event.target.value, 10);

    if (inputType === 'radio') {
      return [targetName];
    }
    else if (inputType === 'checkbox') {
      if (event.target.checked) {
        return checkedState.concat([targetName]);
      } else {
        return checkedState.filter((itemName) => itemName !== targetName);
      }
    }
  }

  onChange(event) {
    const { onChange } = this.props;
    const updatedCheckedState = this.getUpdatedCheckedStateWithChange(event);
    this.setState({ checked: updatedCheckedState });
    onChange && onChange(event, updatedCheckedState);
  }

  toggle(index) {
    this.onChange({ target: { name: index, checked: !(this.state.checked.indexOf(index)) } });
  }

  render() {
    const { checked } = this.state;
    const group = this.group;
    const { name, allChecked, disabled } = this.props;

    return (
      <div>
        { this.props.options.map((option, index) => {
          return (
            <div
              key={index}
              name={index}
              styleName={classNames({
                'option-panel': true,
                'option-panel--selected': checked.indexOf(index) > -1,
                'option-panel--unstyled': !this.props.styled
              })}
            >
              <div className={classNames({'option-panel--blurb': !!option.imageHtml})}>
                <input
                  id={group + index}
                  value={index}
                  name={name || index}
                  ref={index}
                  type={this.props.inputType}
                  key={uuid()}
                  onChange={this.onChange.bind(this)}
                  defaultChecked={
                    ((typeof allChecked === 'undefined')
                      ? (checked.indexOf(index) > -1 && 'checked')
                      : (allChecked ? 'checked' : null))}
                  disabled={disabled}
                />
                <label htmlFor={group + index}>{option.label}</label>
                {option.description}
              </div>
              <div onClick={this.toggle.bind(this, index)}>
                {option.imageHtml && option.imageHtml}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default OptionPanel;
