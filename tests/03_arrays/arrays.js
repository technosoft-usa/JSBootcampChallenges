/* eslint-disable no-unused-vars */
function multiply(arr) {

  let total = 1 ;
  let numValues = arr.flat();
  
  for ( let i = 0 ; i <= numValues.length-1 ; i ++){
    total *= numValues[i]
  }
  return total 

}

function includesCopy(arr, searchValue) {
  for ( let i = 0; i < arr.length; i++) {
    if(arr[i] === searchValue) {
      return true
    }
  }
  return false
}

function inventory(arr) {
  
  // const arrToStr = arr.toString().split(",")
  // console.log(arrToStr);
//   const arrFlat = arr.flat();
//   console.log(arrFlat);
//   const arr0 = arrFlat.shift();
//   console.log(arr0);
//   const arr1 = arrFlat.pop();
//   console.log(arr1);
//   const arr_1_0 = arr1.shift();
//   console.log(arr_1_0);
//   const arr_1_1 = arr1.pop();
//   console.log(arr_1_1);

//  let string = `the ${arr_1_0} ${arr0} is ${arr_1_1} dollars.`;
//  console.log(string);

//  const newArray = string.split(' ');
//  console.log(newArray);

const returnArr = [];
for (let i = 0; i < arr.length; i++) {
  const nestArr = arr[i];
  const str = `The ${nestArr[1][0]} ${nestArr[0]} is ${nestArr[1][1]} dollars.`
  returnArr.push(str);
}
return returnArr;

}

function camelCase(str) {
  const punct = '!.?,;';
  const arr = str.split(' ');
  const returnArr = [];

  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    if ( i === 0) {
      const firstLetter = word[0].toLowerCase();
      const restOfWord = word.slice(1).toLowerCase();
      returnArr.push(firstLetter + restOfWord);
    } else {
      const firstLetter = word[0].toUpperCase();
      const restOfWord = word.slice(1).toLowerCase();
      returnArr.push(firstLetter + restOfWord);
    }
  }
  const returnStr = returnArr.join('');
  if (punct.includes(returnStr[returnStr.length - 1])) {
    return returnStr.slice(0, returnStr.length - 1);
  }
  return returnStr
}

function joiner(arr, del = ',') {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length -1) {
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
