import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { validateProfile } from './validateProfile';
import { validateProfileErrors } from '../../types/profile';

const data = {
  username: 'admin',
  age: 49,
  first: 'Roki',
  lastname: 'Kiro',
  country: Country.Russia,
  city: 'SPb',
  currency: Currency.RUB,
};

describe('validateProfile test', () => {
  test('success', async () => {
    const result = validateProfile(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfile({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });

  test('incorrect age', async () => {
    const result = validateProfile({ ...data, age: undefined });

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_AGE,
    ]);
  });

  test('incorrect country', async () => {
    const result = validateProfile({ ...data, country: undefined });

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });

  test('incorrect all', async () => {
    const result = validateProfile({});

    expect(result).toEqual([
      validateProfileErrors.INCORRECT_USER_DATA,
      validateProfileErrors.INCORRECT_AGE,
      validateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });
});
