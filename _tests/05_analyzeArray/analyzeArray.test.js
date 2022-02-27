const analyzeArray = require('./analyzeArray');

test('basic array', () => {
  expect(analyzeArray([1,1,1,1]))
      .toEqual({average:1,min:1,max:1,length:4});
});;

test('basic array 2', () => {
  expect(analyzeArray([1,2,3,4,5,6]))
      .toEqual({average:3.5,min:1,max:6,length:6});
});;

test('basic array 2, mixed', () => {
  expect(analyzeArray([5,2,6,4,3,1]))
      .toEqual({average:3.5,min:1,max:6,length:6});
});;

test('example problem', () => {
  expect(analyzeArray([1,8,3,4,2,6]))
      .toEqual({average:4,min:1,max:8,length:6});
});;