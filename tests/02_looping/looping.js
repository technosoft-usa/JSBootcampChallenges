/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {

}

function stringReverse(str) {

}

function slicer(str, startIdx, endIdx = str.length - 1) {
  // if startIdx should start at that index
  let returnStr = '';
  if (!startIdx) {
    return str;
  }
  // if (!endIdx) {
  //   endIdx = str.length - 1;
  // }

  for (let i = startIdx; i <= endIdx; i++) {
    returnStr += str[i];
  }

  return returnStr;

  // endIdx should end at the last index before endIdx

  // if nothing passed return original string
}

function addTheEvens(num) {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      total += i;
    }
  }
  return total;
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
