import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import OptionPanel from '../../../components/OptionPanel';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    }
  }

  onChange(e, checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <div>
        <h2>Choose a sign in option</h2>

        <p className="abstract">
        Select how you would like to sign in.
        You can change or add others at any time.
        </p>

        <form>
          <fieldset>
            <OptionPanel
              options={[
                {
                  label: '2 factor with SMS',
                  description: <div>
                    <p>Great for infrequent users. Receive and enter a unique SMS code each time you sign in. No password to remember. A personal or work mobile phone number is required.</p>
                    <p><strong>Time to setup:</strong> no setup</p>
                  </div>,
                },
                {
                  label: 'Digital certificate',
                  description: <div>
                    <p>Great for those who work at one machine. Download a digital certificate to a computer. The certificate will allow a staff member to sign in from their desktop.</p>
                    <p><strong>Time to setup:</strong> 15-20 minutes</p>
                  </div>
                }
              ]}
              inputType="radio"
              styled={true}
              onChange={this.onChange.bind(this)}
            />
          </fieldset>
        </form>
        <div>
          <button className="next" disabled={this.state.checked.length <= 0 && 'disabled'}>Next</button>
        </div>
      </div>
    );
  }
}

export default Select;
