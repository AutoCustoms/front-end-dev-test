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
  let parsed = pNum.split('').filter(char =>
    removeChars.indexOf(char) === -1)
    .join('');
  if (parsed.length === 11 && parsed[0] === '1') {
    parsed = parsed.slice(1);
  } else if (parsed.length !== 10) {
    return null;
  }
  return (Number(parsed) && areaAndExchange(parsed)) ? parsed : null
}

const areaAndExchange = n => (
  !(n[0] === '1' || n[0] === '0' || n[3] === '1' || n[3] === '0')
)


module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
