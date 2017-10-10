//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"

const phoneNumber = (pNum) => {
  const removeChars = '.()-+ ';
  const parsed = pNum.split('').filter(char =>
    removeChars.indexOf(char) === -1 )
    .join('');
  const validNum = parseTenDigit(parsed);
  return (Number(parsed) && validAreaAndExchange(validNum)) ? validNum : null
}

const parseTenDigit = pNum => {
  if (pNum.length === 11 && pNum[0] === '1') {
    return pNum.slice(1);
  } else if (pNum.length === 10) {
    return pNum;
  } else {
    return null;
  }
}

const validAreaAndExchange = pNum => (
  pNum ? !(pNum[0] === '1' || pNum[0] === '0' || pNum[3] === '1' || pNum[3] === '0') : null
)


module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
