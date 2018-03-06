//
// Phone Number
// Finish the rest of 'phoneNumber()' function to satisfy the test
// file located @ /test/main_test.spec.js
//
// To pass, your function should:
// remove parenthesis, spaces, and hyphens as in "(321) 321-4321"
// remove dots as in "321.321.4321"


const phoneNumber = (pNum) => {
    // regex to remove any character NaN
  var nNum = ("" + pNum).replace(/\D/g, '');
  let n = "";
  if (nNum.length == 10 && nNum.substr(0, 1) < 2) {
    return null;
  } else if (nNum.length == 10 && nNum.substr(3, 1) < 2) {
    return null;
  } else if (nNum.length == 11 && nNum.substr(0, 1) != 1) {
    return null;
  } else if (nNum.length == 11 && nNum.substr(0, 1) == 0) {
    return null;
  } else if (nNum.length == 11 && nNum.substr(4, 1) < 2) {
    return null;
  } else {
    if(nNum.length==11){
      n = nNum.slice(0, 0) + nNum.slice(1);
    } else{
      n = nNum;
    }
    n = n.match(/^(\d{3})(\d{3})(\d{4})$/);
  }

  const validNumber = (!n) ? null : n[1] + n[2] + n[3];
  return validNumber;
}

module.exports = phoneNumber
// Note: It's not neccessary to have all code into the 'phoneNumber'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave phoneNumber as an exported
// method as you found it
