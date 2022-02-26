// A reverseString function that takes a string and returns it reversed.

function reverse(string) {
  return string.split('').reverse().join('');
}

module.exports = reverse;