import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: 'markus' },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('markus');
  });

  test('should work with empty space', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
