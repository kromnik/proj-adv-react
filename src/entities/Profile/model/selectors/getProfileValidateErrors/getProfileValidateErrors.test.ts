import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { validateProfileErrors } from '../../types/profile';

describe('getProfileValidateErrors test', () => {
  test('should return validate errors', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          validateProfileErrors.INCORRECT_AGE,
          validateProfileErrors.SERVER_ERROR,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      validateProfileErrors.INCORRECT_AGE,
      validateProfileErrors.SERVER_ERROR,
    ]);
  });

  test('should work with empty space', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
