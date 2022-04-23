/* eslint-disable no-unused-vars */
function multiply(arr) {

}

function includesCopy(arr, searchValue) {

}

function inventory(arr) {

}

function camelCase(str) {
  const returnArr = [];
  const arr = str.split(' ');
  const punctuation = '.,?:!';

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if (i === 0) {
      const firstLetter = word[0].toLowerCase();
      const restOfWord = word.slice(1);
      returnArr.push(firstLetter + restOfWord);
    } else {
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1);
      returnArr.push(firstLetter + restOfWord);
    }
  }
  const returnStr = returnArr.join('');

  if (punctuation.includes(returnStr[returnStr.length - 1])) {
    return returnStr.slice(0, returnStr.length - 1);
  }
  return returnStr;
}

function joiner() {

}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
