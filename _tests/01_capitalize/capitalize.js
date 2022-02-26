// A capitalize function that takes a string and returns it with the first character capitalized.

function capitalize(string) {
  if (typeof string !== 'string') return 'Please enter a string.';
  if (string === '') return '';
  if (!string[0].match(/[a-zA-Z]/)) return string;
  return string = string[0].toUpperCase() + string.slice(1);
}

module.exports = capitalize;