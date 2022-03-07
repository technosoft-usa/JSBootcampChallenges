/* eslint-disable no-unused-vars */
function multiply(arr) {
  let total = 1;
  const flatArray = arr.flat(3);
  console.log(flatArray);
  for (let i = 0; i < flatArray.length; i++) {
    total *= flatArray[i];
  }
  return total;
}

function includesCopy(arr, searchValue) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      return true;
    }
  }
  return false;
}

function inventory(arr) {
  const returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    const nestArr = arr[i];
    const str = 'The '
          + nestArr[1][0]
          + ' '
          + nestArr[0]
          + ' is '
          + nestArr[1][1]
          + ' dollars.';
    returnArr.push(str);
  }
  console.log(returnArr);
  return returnArr;
}

function camelCase(str) {
  const punctuation = '!?.,;';
  const newArr = str.split(' ');
  const returnArr = [];
  for (let i = 0; i < newArr.length; i++) {
    const word = newArr[i];
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

function joiner(arr, del = ',') {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      str += arr[i];
    } else {
      str += arr[i] + del;
    }
  }
  return str;
}

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
