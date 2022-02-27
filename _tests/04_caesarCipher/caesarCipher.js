// A caesarCipher function that takes a string and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website. (http://practicalcryptography.com/ciphers/caesar-cipher/)

// Don’t forget to test wrapping from z to a.
// Don’t forget to test keeping the same case.
// Don’t forget to test punctuation!
// For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

const caesarCipher = (() => {

  // if string is empty, return ''
  // loop through each character in string
  // if character is not letter, append it to new string and continue
  // check if character is upper or lower case
  // use key to cipher that letter through appropriate case string
  // append the ciphered character to a new string
  // return the new string

  function encrypt(string, key) {
    let encryptedString = '';
    for (let i = 0; i < string.length; i++) {
      if (isLetter(string[i])) {
        encryptedString += shiftAlpha(string[i], key);
      } else {
        encryptedString += string[i];
      }
    }
    return encryptedString;
  }

  function isLetter(char) {
    return char.match(/[a-zA-Z]/);
  }
  
  function shiftAlpha(char, key) {
    const alphabet = isUpperCase(char)
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        : 'abcdefghijklmnopqrstuvwxyz';
    const charIndex = alphabet.indexOf(char);
    const newIndex = charIndex + key >= 26
        ? charIndex + key - 26
        : charIndex + key < 0
            ? charIndex + key + 26
            : charIndex + key;
    return alphabet[newIndex];
  }
  
  function isUpperCase(char) {
    return char === char.toUpperCase();
  }

  return { encrypt }
})();




module.exports = caesarCipher;