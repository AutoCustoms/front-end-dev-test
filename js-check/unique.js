//
// Make Unique
// Finish the rest of 'unique()' function to remove all
// duplicate entries from a given array and satisfy the test
//
// To pass the test, unique should accept an array and
// handle strings:
// ['hello', 'hello', 'world'] -> ['hello', 'world']
// handle numbers:
// [1,1,2,2,2,3,4,4,5] => [1,2,3,4,5]
// handle nested arrays:
// [[1], [1], [2]] => [[1], [2]]
// handle nested objects:
// [{foo: 'bar'}, {foo: 'bar'}] => [{foo: 'bar'}]

const unique = (arr) => {
  const result = [];
  const stringArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let el = JSON.stringify(arr[i]);
    if (stringArr.indexOf(el) === -1) {
      stringArr.push(el);
      result.unshift(arr[i]);
    }
  }
  return result;
}

module.exports = unique
// Note: It's not neccessary to have all code into the 'unique'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave unique as an exported
// method as you found it
