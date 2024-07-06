const { validateEmail, validatePhone } = require('../../src/utils/validateInput');

test('validateEmail should return true for valid email', () => {
  expect(validateEmail('test@example.com')).toBe(true);
});

test('validateEmail should return false for invalid email', () => {
  expect(validateEmail('invalid-email')).toBe(false);
});

test('validatePhone should return true for valid phone number', () => {
  expect(validatePhone('+1234567890')).toBe(true);
});

test('validatePhone should return false for invalid phone number', () => {
  expect(validatePhone('123')).toBe(false);
});
