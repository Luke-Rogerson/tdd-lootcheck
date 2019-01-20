import * as constants from './constants';
import * as actions from './balance';

it('creates an action to set the balance', () => {
  const balance = 0;
  const expectedAction = {
    type: constants.SET_BALANCE,
    balance
  };
  expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to deposit into the balance', () => {
  const deposit = 100;
  const expectedAction = {
    type: constants.DEPOSIT,
    deposit
  };

  expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw money out of the balance', () => {
  const withdrawel = 50;
  const expectedAction = {
    type: constants.WITHDRAW,
    withdrawel
  };
  expect(actions.withdraw(withdrawel)).toEqual(expectedAction);
});
