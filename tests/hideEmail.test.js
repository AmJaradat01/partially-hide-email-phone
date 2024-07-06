const hideEmail = require('../src/hideEmail');

test('hideEmail should partially hide the email address', () => {
  expect(hideEmail('test@example.com')).toBe('te***t@example.com');
});

test('hideEmail should throw an error for invalid email', () => {
  expect(() => hideEmail('invalid-email')).toThrow('Invalid email address');
});
