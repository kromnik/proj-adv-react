import { Profile, validateProfileErrors } from '../../types/profile';

export const validateProfile = (profile?: Profile) => {
  if (!profile) {
    return [validateProfileErrors.NO_DATA];
  }
  const {
    first, lastname, age, country,
  } = profile;
  const errors: validateProfileErrors[] = [];

  if (!first || !lastname) {
    errors.push(validateProfileErrors.INCORRECT_USER_DATA);
  }
  if (!age || !Number.isInteger(age)) {
    errors.push(validateProfileErrors.INCORRECT_AGE);
  }
  if (!country) {
    errors.push(validateProfileErrors.INCORRECT_COUNTRY);
  }
  return errors;
};
