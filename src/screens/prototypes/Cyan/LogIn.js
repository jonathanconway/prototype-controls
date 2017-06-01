import React, { Component } from 'react';

class Cyan extends Component {
  render() {
    return (
      <form>
        <h2>Log In{this.props.loggedIn}</h2>
        <div>
          <label>Email Address</label>
          <input type="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div><br />
        <div>
          <button type="button">Log In</button>
        </div>
      </form>
    );
  }
}

export default Cyan;