const hidePhone = require('../src/hidePhone');

test('hidePhone should partially hide the phone number', () => {
  expect(hidePhone('+1234567890')).toBe('+1***90');
});

test('hidePhone should throw an error for invalid phone number', () => {
  expect(() => hidePhone('123')).toThrow('Invalid phone number');
});
