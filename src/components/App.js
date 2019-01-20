import React, { Component } from 'react';
import Wallet from './Wallet';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Loot Check</h1>
        <hr />
        <Wallet />
      </div>
    );
  }
}
