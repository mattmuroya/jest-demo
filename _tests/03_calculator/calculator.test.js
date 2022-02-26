const calculator = require('./calculator');

test('addition', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('subtraction (positive)', () => {
  expect(calculator.subtract(10, 4)).toBe(6);
});

test('subtraction (negative)', () => {
  expect(calculator.subtract(4, 10)).toBe(-6);
});

test('multiplication', () => {
  expect(calculator.multiply(3, 6)).toBe(18);
});

test('division (integer)', () => {
  expect(calculator.divide(21, 3)).toBe(7)
});

test('division (non-integer, rounded down)', () => {
  expect(calculator.divide(10, 3)).toBe(3.33333)
});

test('division (non-integer, rounded up)', () => {
  expect(calculator.divide(10, 6)).toBe(1.66667)
});
