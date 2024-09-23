import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: '1224' },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('1224');
  });

  test('should work with empty space', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
