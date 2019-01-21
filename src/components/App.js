import React from 'react';
import Wallet from './Wallet';
import Loot from './Loot';

const App = () => {
  return (
    <div>
      <h1>Loot Check</h1>
      <hr />
      <Wallet />
      <hr />
      <Loot />
    </div>
  );
};

export default App;
