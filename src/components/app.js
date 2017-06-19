import React, { Component } from 'react';
import Nav from './nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='row'>
          <div className='column small-centered medium-6 large-4'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
