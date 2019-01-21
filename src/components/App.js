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
      <div>
        Powered by{' '}
        <a target='_blank' href='https://www.coindesk.com/price'>
          Coindesk
        </a>
      </div>
    </div>
  );
};

export default App;
