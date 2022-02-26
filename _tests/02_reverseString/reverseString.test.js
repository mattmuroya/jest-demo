const reverse = require('./reverseString');

test('reverses basic string', () => {
  expect(reverse('hello world')).toBe('dlrow olleh')
});

test('reverses basic string with punctuation and capitalization', () => {
  expect(reverse('Hello, world!')).toBe('!dlrow ,olleH')
});

test('handles empty string', () => {
  expect(reverse('')).toBe('')
});

test('handles palindromes', () => {
  const string = 'racecar';
  expect(reverse(string)).toBe(string);
});