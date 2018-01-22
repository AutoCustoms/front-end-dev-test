//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

const phoneNumber = (pNum) => {
  const number = pNum.replace(/\D+/g, '');
  const firstDigit = number.charAt(0);
  const reg = new RegExp(/^[2-9]\d{2}[2-9]\d{2}\d{4}$/).test(number);
  if(number.length >= 11) {
    return firstDigit == 1 ? number.substr(1) : null;
  }
    return reg ? number : null;
}

module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
