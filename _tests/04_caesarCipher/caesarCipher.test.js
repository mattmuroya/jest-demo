const caesarCipher = require('./caesarCipher');

test('ciphers basic string in lower case', () => {
  expect(caesarCipher.encrypt('abcd', 3)).toBe('defg');
});

test('handles empty string', () => {
  expect(caesarCipher.encrypt('', 5)).toBe('');
});

test('handles string with non-alpha characters', () => {
  expect(caesarCipher.encrypt('a b c 1 2 3 !', 2)).toBe('c d e 1 2 3 !');
});

test('handles capitalization', () => {
  expect(caesarCipher.encrypt('Matt M.', 4)).toBe('Qexx Q.');
});

test('handles wrapping from Z to A', () => {
  expect(caesarCipher.encrypt('Hello, World!', 10)).toBe('Rovvy, Gybvn!');
});

test('handles keyboard mashing', () => {
  expect(caesarCipher.encrypt(' aewUIEBPigyw 2 OI( ) && (s', 24)).toBe(' ycuSGCZNgewu 2 MG( ) && (q');
});

test('handles negative key value', () => {
  expect(caesarCipher.encrypt('Hello, World!', -8)).toBe('Zwddg, Ogjdv!');
});