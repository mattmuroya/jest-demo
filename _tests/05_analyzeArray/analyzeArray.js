// An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

// const object = analyzeArray([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

function analyzeArray(arr) {

  const min = (() => Math.min(...arr))();
  
  const max = (() => Math.max(...arr))();
  
  const length = (() => arr.length)();
  
  const average = arr.reduce((pre, cur) => pre + cur, 0) / length;

  return {
    average,
    min,
    max,
    length
  };
}


module.exports = analyzeArray;