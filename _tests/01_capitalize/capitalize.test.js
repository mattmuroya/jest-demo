const capitalize = require('./capitalize');

test('capitalizes normal string in all lower case', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('capitalizes string already upper case', () => {
  expect(capitalize('HELLO WORLD')).toBe('HELLO WORLD');
});

test('handles empty string', () => {
  expect(capitalize('')).toBe('');
});

test('handles numeric characters', () => {
  expect(capitalize('12345')).toBe('12345');
});

test('handles other non-alpha characters', () => {
  expect(capitalize('...')).toBe('...');
});

test('rejects non-string arguments', () => {
  expect(capitalize(100)).toBe('Please enter a string.');
});