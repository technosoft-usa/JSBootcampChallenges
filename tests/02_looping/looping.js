/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let total = 1;
  for (let i = 1 ; i <= num ; i++) {
    total *= i ;
  }
  return total ;
}

function stringReverse(str) {

  let rev = '';

  for (let i = str.length -1 ; i >= 0 ; i--){
    rev += str[i];
  }
  return rev

}

function slicer(originalString, startIdx, endIdx = originalString.length) {

  if (startIdx === undefined) {
    return originalString;
  }
  let newSlice = '';
  for (let i = startIdx; i < endIdx; i++) {
    newSlice += originalString[i];
  }
  return newSlice
}

function addTheEvens(num) {


}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
