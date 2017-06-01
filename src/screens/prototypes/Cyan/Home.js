import React, { Component } from 'react';

class Home extends Component {
  render = () => (
    <form>
      <div style={{float: 'left'}}>
        <h2>Welcome, Human!</h2>
      </div>
      <div style={{float: 'right'}}>
        <button type="button">Log Out</button>
      </div>
    </form>
  );
}

export default Home;