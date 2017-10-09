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
  let pNumParsed = pNum.split('').filter(char => removeChars.indexOf(char) === -1 ).join('');
  if (isNumeric(pNumParsed)) {
    let tenDigit = parseTenDigit(pNumParsed);
    if (!tenDigit) {
      return null;
    }
    if (validAreaAndExchange(tenDigit)) {
      return tenDigit;
    }
  }
  return null;
}

const isNumeric = (n) => (!!Number(n));

const parseTenDigit = (pNum) => {
  let tenDigit = pNum;
  if (tenDigit.length === 11 && tenDigit[0] === '1') {
    return tenDigit.slice(1);
  } else if (tenDigit.length === 10){
    return tenDigit;
  } else {
    return null;
  }
}

const validAreaAndExchange = (pNum) => (
  !(pNum[0] === '1' || pNum[0] === '0' || pNum[3] === '1' || pNum[3] === '0')
)


module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
