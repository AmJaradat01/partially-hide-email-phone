const { formatEmail, formatPhone } = require('../../src/utils/formatOutput');

test('formatEmail should return formatted email', () => {
  expect(formatEmail('te***t', 'example.com')).toBe('te***t@example.com');
});

test('formatPhone should return formatted phone', () => {
  expect(formatPhone('+1***90')).toBe('+1***90');
});
